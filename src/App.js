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
        <a href="https://github.com/avijitkumaryadav/weather-dashboard-app-react.git">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/avijitkumaryadav">
          Avijit Kumar Yadav
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://developer.mozilla.org/en-US/">
          HTML HINTS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
