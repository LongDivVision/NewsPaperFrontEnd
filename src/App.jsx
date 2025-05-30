import React from "react";
import Sitenav from "./services/Sitenav";
import loginService from "./components/codeChallenge/services/loginService";
import PoliticalCandidates from "../src/components/codeChallenge/PoliticalCandidates";
// import SVI from "./SVI";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const user = {
    email: "geoffrey@snead.com",
    password: "Password1!",
    tenantId: "u06m4fx0e2k",
  };

  const onLoginSuccess = (response) => {
    console.log(response);
  };

  const onLoginError = (response) => {
    console.error(response);
  };
  loginService.user(user).then(onLoginSuccess).catch(onLoginError);

  return (
    <React.Fragment>
      <Sitenav></Sitenav>
      {/* <SVI></SVI> */}
      <h1>We Are Werking</h1>
      <footer className="container">
        <p>&copy; Snead / Stella 2025-2028</p>
      </footer>
      <Routes>
        <Route
          path="/politicalcandidates"
          element={<PoliticalCandidates />}
        ></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
