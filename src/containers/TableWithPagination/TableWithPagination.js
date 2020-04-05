import React, { Component } from "react";
import Table from "../Table/Table";

class TableWithPagination extends Component {

  state = {
    currentPageNo: 1,
    totalRecordCount: 0,
    countPerPage: 5,
    tableRecord: ""
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        tableRecord: this.props.tableData,
        currentPage: 1,
        postsPerPage: 5
      });
    }
  }

   paginate(number){
      this.setState({
        currentPageNo: number
      });
  }

  render() {
    //console.log(this.state.tableRecord);
    if (this.state.tableRecord !== "") {
      let data = { ...this.state.tableRecord };
      const indexOfLastPost = this.state.currentPageNo * this.state.postsPerPage;
      const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
      var currentPosts = Object.values(data).slice(
        indexOfFirstPost,
        indexOfLastPost
      );

      var pageNumbers = [];
      var totalRecordCount = Object.values(data).length;

      for (
        let index = 1;
        index <= Math.ceil(totalRecordCount / this.state.postsPerPage);
        index++
      ) {
        pageNumbers.push(index);
      }

      var page = pageNumbers.map(number => {
        return (
          <li key={number} className="page-item">
            <a onClick={()=>this.paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        );
      });
    }

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-9">
              <nav>
                <ul className="pagination">{page}</ul>
              </nav>
            </div>
            <div className="col-sm-3">
              <p>Showing rows {this.state.currentPageNo} to 5 of {totalRecordCount}</p>
            </div>
          </div>
        </div>

        <Table tableData={currentPosts} />

      </div>
    );
  }
}

export default TableWithPagination;
