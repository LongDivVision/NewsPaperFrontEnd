import React from "react";
import politicalCandidateService from "./services/politicalCandidateService";
import PoliticalCandidateCard from "./PoliticalCandidateCard";
import { useState } from "react";
// import PoliticalCandidateCard from "./PoliticalCandidateCard";

function PoliticalCandidates() {
  //Using form1 for my left form
  const [form1, setForm1] = useState({
    firstName: "",
    lastName: "",
    currentVotes: 0,
    party: "",
    imageUrl: "",
  });
  //Using form2 for my right form
  const [form2, setForm2] = useState({
    firstName2: "",
    lastName2: "",
    currentVotes2: 0,
    party2: "",
    imageUrl2: "",
  });

  const [candidate1, setCandidate1] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    currentVotes: 0,
    party: "",
    imageUrl: "",
  });
  const [candidate2, setCandidate2] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    currentVotes: 0,
    party: "",
    imageUrl: "",
  });

  const onFormFieldChangeL = (event) => {
    console.log("onChange", { syntheticEvent: event });

    //capture info you need from event here as the event object will fall out of scope quickly

    //the event.target will represent the input
    const target = event.target;

    //this is the value of the input, the value in the text box the user types into
    const value = target.value;

    //this is the name (so be sure to give your form fields a name attribute)
    const name = target.name;

    //set the new state using the old property name / object key and using the new value for formData
    setForm1((prevState) => {
      console.log("updater onChange", prevState);

      // copy the personData object from state using the spread operator
      const newUserObject = {
        ...prevState,
      };

      //change the value of the copied object using the name and using bracket notation
      newUserObject[name] = value;

      //in functional components the name of this object/variable does not matter
      return newUserObject;
    });
  };

  const onSubmitClickedL = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    politicalCandidateService.add(form1).then(onSuccessL).catch(onErrorL);
  };

  const onSuccessL = (response) => {
    console.log(response);
    let id = response.data.item;
    politicalCandidateService.get(id).then(onGetSuccess).catch(onErrorL);
  };

  const onGetSuccess = (response) => {
    console.log(response.data.item);
    let aCandidate = response.data.item;
    setCandidate1((prevState) => {
      const newCandidate = { ...prevState };
      newCandidate.id = aCandidate.id;
      newCandidate.firstName = aCandidate.firstName;
      newCandidate.lastName = aCandidate.lastName;
      newCandidate.currentVotes = aCandidate.currentVotes;
      newCandidate.party = aCandidate.party;
      newCandidate.imageUrl = aCandidate.imageUrl;
      return newCandidate;
    });
  };

  const onErrorL = (response) => {
    console.warn(response);
  };

  const onFormFieldChangeR = (event) => {
    console.log("onChange", { syntheticEvent: event });

    //capture info you need from event here as the event object will fall out of scope quickly

    //the event.target will represent the input
    const target = event.target;
    console.log(target, "target");
    //this is the value of the input, the value in the text box the user types into
    const value = target.value;
    console.log(value, "value");
    //this is the name (so be sure to give your form fields a name attribute)
    const name = target.name;
    console.log(name, "name");
    //set the new state using the old property name / object key and using the new value for formData
    setForm2((prevState) => {
      console.log("updater onChange");

      // copy the personData object from state using the spread operator
      const newUserObject = {
        ...prevState,
      };

      //change the value of the copied object using the name and using bracket notation
      newUserObject[name] = value;

      //in functional components the name of this object/variable does not matter
      return newUserObject;
    });
  };

  let onSubmitClickedR = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    politicalCandidateService.add(form2).then(onSuccessR).catch(onErrorR);
  };

  const onSuccessR = (response) => {
    console.log(response);
    let id2 = response.data.item;
    politicalCandidateService.get(id2).then(onGetSuccess2).catch(onErrorR);
  };
  const onGetSuccess2 = (response) => {
    console.log(response.data.item);
    let aCandidate2 = response.data.item;
    setCandidate2((prevState) => {
      const newCandidate2 = { ...prevState };
      newCandidate2.id = aCandidate2.id;
      newCandidate2.firstName = aCandidate2.firstName2;
      newCandidate2.lastName = aCandidate2.lastName2;
      newCandidate2.currentVotes = aCandidate2.currentVotes2;
      newCandidate2.party = aCandidate2.party2;
      newCandidate2.imageUrl = aCandidate2.imageUrl2;
      return newCandidate2;
    });
  };

  const onErrorR = (response) => {
    console.warn(response);
  };

  return (
    <div className="container row">
      <h1>Political Candidates</h1>
      <div className="form-left col-6">
        <form>
          <div className="mb-3 form-group">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              value={form1.firstName}
              onChange={onFormFieldChangeL}
              name="firstName"
              type="text"
              className="form-control"
              id="firstName"
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              value={form1.lastName}
              onChange={onFormFieldChangeL}
              name="lastName"
              type="text"
              className="form-control"
              id="lastName"
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="currentVotes" className="form-label">
              Current Votes
            </label>
            <input
              value={form1.currentVotes}
              onChange={onFormFieldChangeL}
              name="currentVotes"
              type="text"
              className="form-control"
              id="currentVotes"
            />
          </div>
          <div className="form-group">
            <label htmlFor="party" className="form-label">
              Party
            </label>
            <select
              onChange={onFormFieldChangeL}
              value=""
              name="party"
              id="party"
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="democrat">Democrat</option>
              <option value="republican">Republican</option>
              <option value="independent">Independent</option>
            </select>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="imageUrl" className="form-label">
              Candidate Image
            </label>
            <input
              value={form1.imageUrl}
              onChange={onFormFieldChangeL}
              name="imageUrl"
              type="text"
              className="form-control"
              id="imageUrl"
            />
          </div>
          <button
            onClick={onSubmitClickedL}
            type="submit"
            className="btn btn-primary"
            id="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="form-right col-6">
        <form>
          <div className="mb-3 form-group">
            <label htmlFor="firstName2" className="form-label">
              First Name
            </label>
            <input
              value={form2.firstName2}
              onChange={onFormFieldChangeR}
              name="firstName2"
              type="text"
              className="form-control"
              id="firstName2"
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="lastName2" className="form-label">
              Last Name
            </label>
            <input
              value={form2.lastName2}
              onChange={onFormFieldChangeR}
              name="lastName2"
              type="text"
              className="form-control"
              id="lastName2"
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="currentVotes2" className="form-label">
              Current Votes
            </label>
            <input
              value={form2.currentVotes2}
              onChange={onFormFieldChangeR}
              name="currentVotes2"
              type="text"
              className="form-control"
              id="currentVotes2"
            />
          </div>
          <div className="form-group">
            <label htmlFor="party2" className="form-label">
              Party
            </label>
            <select
              onChange={onFormFieldChangeR}
              value={form2.party2}
              name="party2"
              id="party2"
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="democrat">Democcrat</option>
              <option value="republican">Republican</option>
              <option value="independent">Independent</option>
            </select>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="imageUrl2" className="form-label">
              Candidate Image
            </label>
            <input
              value={form2.imageUrl2}
              onChange={onFormFieldChangeR}
              name="imageUrl2"
              type="text"
              className="form-control"
              id="imageUrl2"
            />
          </div>
          <button
            onClick={onSubmitClickedR}
            type="submit"
            className="btn btn-primary"
            id="submit2"
          >
            Submit
          </button>
        </form>
      </div>

      <PoliticalCandidateCard
        candidate={candidate1}
        frontRunner={candidate2}
      ></PoliticalCandidateCard>
    </div>
  );
}

export default PoliticalCandidates;
