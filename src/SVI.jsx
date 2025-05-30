import React from "react";
import { useState } from "react";

function SVI() {
  const [click, setClick] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
  });

  const onFormFieldChange = (event) => {
    console.log("onChange", { syntheticEvent: event });

    //capture info you need from event here as the event object will fall out of scope quickly

    //the event.target will represent the input
    const target = event.target;

    //this is the value of the input, the value in the text box the user types into
    const value = target.value;

    //this is the name (so be sure to give your form fields a name attribute)
    const name = target.name;

    //set the new state using the old property name / object key and using the new value for formData
    setClick((prevState) => {
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

  const onClickLog = (e) => {
    e.preventDefault();
    console.log(click);
  };

  return (
    <React.Fragment>
      <h1>I love Code.</h1>
      <div className="container">
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              name="firstName"
              onChange={onFormFieldChange}
              value={click.firstName}
              id="firstName"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              name="lastName"
              onChange={onFormFieldChange}
              value={click.lastName}
              id="lastName"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              name="email"
              onChange={onFormFieldChange}
              id="email"
              value={click.email}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              name="age"
              value={click.age}
              onChange={onFormFieldChange}
              id="age"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-check"></div>
          <button
            onClick={onClickLog}
            type="button"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default SVI;
