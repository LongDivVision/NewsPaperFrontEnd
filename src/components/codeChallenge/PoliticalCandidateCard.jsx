import React from "react";

function PoliticalCandidateCard(props) {
  console.log(props);
  return (
    <React.Fragment>
      <h1>Candidate 1</h1>
      <div className="container">
        <div className="row">
          <div className="form-left col-6">
            <div className="card">
              <img
                src={props.candidate.imageUrl}
                className="card-img-top"
                alt="A great political candidate"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {props.candidate.firstName} {props.candidate.lastName}
                </h5>
                <p>{props.candidate.party}</p>
                <p>Current Votes: {props.candidate.currentVotes}</p>
                <p className="card-text">
                  I plan to run on a campaign of truth, honesty, and the
                  American Way. In reality, I will be bogged
                  <br />
                  down by the smallness of petty individuals and likely achieve
                  far less than that of which I was capable.
                </p>
                <button type="button" class="btn btn-success btn-sm">
                  Cast Your Vote
                </button>
              </div>
            </div>
          </div>
          <h1>Candidate 2</h1>
          <div className="col-6">
            <div className="card" id={props.frontRunner.id}>
              <img
                src={props.frontRunner.imageUrl}
                className="card-img-top"
                alt="A greater political candidate"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {props.frontRunner.firstName} {props.frontRunner.lastName}
                </h5>
                <p>{props.frontRunner.party}</p>
                <p>Current Votes: {props.frontRunner.currentVotes}</p>
                <p className="card-text">
                  I plan to run on a campaign of truth, honesty, and the
                  American Way. In reality, I will be bogged
                  <br />
                  down by the smallness of petty individuals and likely achieve
                  far less than that of which I was capable.
                </p>
                <button type="button" class="btn btn-success btn-sm">
                  Cast Your Vote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PoliticalCandidateCard;
