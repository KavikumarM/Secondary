import React, { Component } from "react";
import App from "../../App";
import Image from "../../assets/Images/cloudix.png";

class Authentication extends Component {
  constructor() {
    super();
    this.userRef = React.createRef();
    this.pwdRef = React.createRef();
  }

  state = {
    userName: "",
    password: "",
    isValidUser: false,
  };
  usernameHandler(e) {
    this.setState({
      userName: e.target.value,
    });
  }

  passwordHandler(e) {
    this.setState({
      password: e.target.value,
    });
  }

  submithandler() {
    this.userRef.current.value = "";
    this.pwdRef.current.value = "";
    this.userRef.current.focus();

    if (this.state.userName === "Admin" && this.state.password === "Admin@1234") {
      this.setState({
        isValidUser: true,
      });
      sessionStorage.setItem("isValidUserStorage", true);
    } else {
      sessionStorage.setItem("isValidUserStorage", false);
      alert("Invalid username or password. Kindly check again!!");
    }
  }

  render() {
    const authPage = !this.state.isValidUser ? (
      <form>
        <div
          className="container"
          style={{ margin: "auto", width: "35%", marginTop: "156px" }}
        >
          <div className="card" style={{ width: "25rem" }}>
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-sm-12">
                <img
                  src={Image}
                  className="img-fluid" //img-thumbnail card-img-top
                  alt="hello"
                  style={{ height: "5rem" }}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label text-center">
                Username
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroup"
                  onChange={(event) => this.usernameHandler(event)}
                  ref={this.userRef}
                ></input>
              </div>
              <div className="col-sm-1"></div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label text-center">
                Password
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  onChange={(event) => this.passwordHandler(event)}
                  ref={this.pwdRef}
                ></input>
              </div>
              <div className="col-sm-1"></div>
            </div>
            <div className="form-group row text-center">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => this.submithandler()}
                >
                  Sign in
                </button>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        </div>
      </form>
    ) : (
      <App />
    );

    return <div>{authPage}</div>;
  }
}

export default Authentication;
