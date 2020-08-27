import React from "react";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <img id="logo" src={require("../assets/logo.png")} alt="fitbit logo" />
      <h4 id="title">Fitbit Activity Tracker</h4>
      <h5 className="signout">Sign Out</h5>
    </nav>
  );
};

export default Navbar;
