import React, { Component } from "react";
import Main from "./containers/main/Main";
import Authentication from "./containers/Authentication/Authentication";

class App extends Component {
  state = {
    isAuthenticated: false
  };

  getAuth(){
    let isValiduser=sessionStorage.getItem('isValidUserStorage');
    this.setState({
      isAuthenticated: isValiduser
    });
  }

  componentDidMount(){
    this.getAuth();
  }

  render() {
    const mainPage = this.state.isAuthenticated ? <Main isAuthenticated={this.state.isAuthenticated} /> : null;
    const authPage= !this.state.isAuthenticated ? <Authentication /> : null;
    return (
      <React.Fragment>
        {authPage}
        {mainPage}
      </React.Fragment>
    );
  }
}
export default App;
