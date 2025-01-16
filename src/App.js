import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/avijitkumaryadav">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://in.linkedin.com/in/avijitkumaryadav">
          Avijit Kumar Yadav
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          HTML HINTS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
