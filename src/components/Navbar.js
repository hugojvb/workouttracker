import React, { useContext } from "react";
import "../style/navbar.css";
import logo from "../assets/logo.png";
import Context from "../context/context";

const Navbar = (props) => {
  const context = useContext(Context);
  const { activity, logged_in } = context;

  return (
    <nav id="navbar">
      <img id="logo" src={logo} alt="fitbit logo" />
      <h4 id="title">Fitbit Activity Tracker</h4>
      <ul>
        <li>
          {activity.summary && (
            <h6 className="active">
              Minutes of Intense Workout Today:{" "}
              {activity.summary.veryActiveMinutes}
            </h6>
          )}
        </li>
        <li>
          {logged_in && (
            <a href="https://peaceful-darwin-1a89b0.netlify.app/" className="signout">
              <h4>Log Out</h4>
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
