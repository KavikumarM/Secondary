import React from "react";
import Image from "../../assets/Images/person2.png";

const card = (props) => {
  return (
    <div className="card" style={{ width: "8 rem", font: "" }}>
      <img
        src={Image}
        className="img-fluid" //img-thumbnail card-img-top
        alt="hello"
        style={{ height: "5rem" }}
      />
      <div className="card-body">
        <h6 className="card-title text-center">{props.domainOfCandidate}</h6>
        <h5 className="card-text text-center"><strong>{props.countOfCandidates}</strong></h5>
        <h6 className="card-text text-center">Candidates</h6>
      </div>
    </div>
  );
};

export default card;
