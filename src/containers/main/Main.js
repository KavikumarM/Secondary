import React, { Component } from "react";
import Button from "../../components/button/button";
import Cards from "../Cards/Cards";
import TableWithPagination from "../TableWithPagination/TableWithPagination";
import Authentication from "../Authentication/Authentication";
import "./Main.css";
import Image from "../../assets/Images/cloudix.png";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      apiResponse: "",
      isAuthenticated: true,
    };
  }

  componentDidMount() {
    var apiData = require("../../assets/Data/APIResponse.json");
    this.setState({
      apiResponse: apiData,
      isAuthenticated: this.props.isAuthenticated,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
      this.setState({
        isAuthenticated: this.props.isAuthenticated,
      });
    }
  }

  adminHandler() {
    sessionStorage.setItem("isValidUserStorage", false);
    this.setState({
      isAuthenticated: false,
    });
  }

  render() {
    if (this.props.isAuthenticated !== "") {
      var pageLoad = this.state.isAuthenticated ? (
        <div className="container-fluid bg-light">
          <div className="navbar-light bg-light">
            <div className="navbar-nav bd-navbar-nav flex-row header">
              <div className="navbar-brand col-sm-1">
              <img
                  src={Image}
                  className="img-fluid" //img-thumbnail card-img-top
                  alt="hello"
                  style={{ height: "5rem" }}
                />
              </div>
              <div className="col-sm-10"></div>
              <div className="col-sm-1 navbar-nav">
                <Button methodName={() => this.adminHandler()}>Logout</Button>
              </div>
            </div>
          </div>

          {/* <hr /> */}

          <div className="navbar-light bg-light container-fluid "  id="navbar" >
            <div className="container row">
              <div className="col-sm-1">
                <p>Dashboard</p>
              </div>
              <div className="col text-left"  >
                <p>Recruiter-dashboard</p>
              </div>
              {/* <div className="col-sm-9"><p></p></div> */}
            </div>
          </div>

          {/* <hr  /> */}

          <div className="container-fluid">
            <div className="row">
              <div className=" col-sm-1" id="sidebar"></div>

              <div className="col-md-11 scrollable" id="maincontent">
                <div className="card-deck" style={{ marginTop: "1rem" }}>
                  <Cards apiResponse={this.state.apiResponse} />
                </div>

                {/* <hr /> */}

                {/* <div className="row">
                  <p></p>
                </div> */}

                <div className="row" style={{ marginTop: "1rem" }}>
                  <div className="container-fluid">
                    <div className="card col-lg-12">
                      <h5 className="text-left">Scheduled List</h5>
                      <hr />
                      <TableWithPagination
                        tableData={this.state.apiResponse.data}
                      />
                      {/* <hr /> */}
                    </div>
                    {/* <div className="row"></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Authentication />
      );
    }

    return <React.Fragment>{pageLoad}</React.Fragment>;
  }
}
export default Main;
