import React, { Component } from "react";

class Table extends Component {

  render() {
    if (this.props.tableData !== undefined) {
      var tableHead = Object.keys(this.props.tableData[0]).map((value, id) => {
        return (
          <th scope="col" key={id}>
            {value.toUpperCase()}
          </th>
        );
      });

      var tableBody = Object.values(this.props.tableData).map((value, id) => {
        return (
          <tr key={id} >
            <th scope="row">{value.candidateId}</th>
            <td>{value.name}</td>
            <td>{value.domain}</td>
            <td>{value.yearOfExperience}</td>
            <td>{value.recruiterName}</td>
            <td>{value.interviewType}</td>
          </tr>
        );
      });
      //console.log(this.props.tableData.length);
    }

    return (
      <div className="table-responsive">
        <table className="table">
          <thead className="thead-light">
            <tr>{tableHead}</tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
