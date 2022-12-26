import React, { useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/A3.png";
const Navbar = () => {
  const navLinksSpread = (e) => {
    const ele = document.querySelector(".nav-links-container");
    ele.style.display = ele.style.display == "none" ? "flex" : "none";
  };

  return (
    <div className="navbar-container">
      <div className="main-logo-container">
        <img className="main-logo" src={Logo} alt="Abhijeet Nana Takle" />
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li className="nav-link">
            <div className="nav-link-text">About</div>
            <span className="underline-effect"></span>
          </li>
          <li className="nav-link">
            <div className="nav-link-text">Projects</div>
            <span className="underline-effect"></span>
          </li>
          <li className="nav-link">
            <div className="nav-link-text">Skills</div>
            <span className="underline-effect"></span>
          </li>
          <li className="nav-link">
            <div className="nav-link-text">Education</div>
            <span className="underline-effect"></span>
          </li>
          <li className="nav-link">
            <div className="nav-link-text">Work Exp.</div>
            <span className="underline-effect"></span>
          </li>
          <li className="nav-link">
            <div className="nav-link-text">Contacts</div>
            <span className="underline-effect"></span>
          </li>
        </ul>
      </div>
      <div className="nav-extra">
        <div className="login-btn">
          <span className="login-text">Log In</span>
        </div>
        <div className="nav-links-folded" onClick={navLinksSpread}>
          <div className="folded-divs"></div>
          <div className="folded-divs"></div>
          <div className="folded-divs"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
