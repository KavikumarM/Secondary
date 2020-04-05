import React, { Component } from "react";
import Card from "../../components/card/card";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Response: ""
    };
  }

  componentDidUpdate(preProps) {
    if (preProps !== this.props) {
      this.setState({
        Response: this.props.apiResponse
      });
    }
  }

  render() {
    var totalCount;
    if (this.state.Response !== "") {
      //Find Unique domain
      let jsonData = this.state.Response.data;
      var uniqueDomain = Object.values(jsonData).map(val => {
        return val.domain;
      });

      totalCount =
        this.state.Response.data.length > 0
          ? this.state.Response.data.length
          : null;

      let uni = new Set(uniqueDomain);

      var setIter = uni.values();
      var domainNameValue = []; //Unique Domain AVailable here

      let countOfDomain = []; // Candidate count of each domain Available here
      for (let i = 0; i < uni.size; i++) {
        let domain = setIter.next().value;
        domainNameValue[i] = domain;
        let count = uniqueDomain.filter(x => {
          return x === domain;
        }).length;
        countOfDomain[i] = count;
      }

      var cardPack = countOfDomain.map((domainCount, index) => {
        var domainName = domainNameValue[index];
        return (
          <Card
            key={index}
            domainOfCandidate={domainName}
            countOfCandidates={domainCount}
          />
        );
      });
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <Card
            domainOfCandidate={"Total Candidates"}
            countOfCandidates={totalCount}
          />
          {cardPack}
        </div>
      </div>
    );
  }
}

export default Cards;
