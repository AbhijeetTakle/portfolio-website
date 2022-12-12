import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="main-logo"></div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li className="nav-link">About</li>
          <li className="nav-link">Projects</li>
          <li className="nav-link">Skills</li>
          <li className="nav-link">Education</li>
          <li className="nav-link">Work ex</li>
          <li className="nav-link">Contacts</li>
        </ul>
      </div>
      <div className="nav-extra"></div>
    </div>
  );
};

export default Navbar;
