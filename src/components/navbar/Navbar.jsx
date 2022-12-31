import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/A3.png";
const Navbar = () => {
  const navLinksSpread = (e) => {
    const ele = document.querySelector(".nav-links-container");
    ele.style.display = ele.style.display === "none" ? "flex" : "none";
  };

  return (
    <div className="navbar-container">
      <div className="main-logo-container">
        <a href="#header">
          <img className="main-logo" src={Logo} alt="Abhijeet Nana Takle" />
        </a>
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#">
              <div className="nav-link-text">About</div>
            </a>
            <span className="underline-effect"></span>
          </li>
          <li className="nav-link">
            <a href="#projects">
              <div className="nav-link-text">Projects</div>
            </a>
            <span className="underline-effect"></span>
          </li>
          <li className="nav-link">
            <a href="#skills">
              <div className="nav-link-text">Skills</div>
            </a>
            <span className="underline-effect"></span>
          </li>
          <li className="nav-link">
            <a href="#work">
              <div className="nav-link-text">Work Exp.</div>
            </a>
            <span className="underline-effect"></span>
          </li>
          <li className="nav-link">
            <a href="#contacts">
              <div className="nav-link-text">Contact</div>
            </a>
            <span className="underline-effect"></span>
          </li>
        </ul>
      </div>
      <div className="nav-extra">
        <div className="login-btn">
          <span className="login-text">Login</span>
        </div>
        <div className="nav-links-folded" onClick={navLinksSpread}>
          <div className="folded-divs"></div>
          <div className="folded-divs"></div>
          <div className="folded-divs"></div>
        </div>
      </div>
      <div className="blur-background"></div>
    </div>
  );
};

export default Navbar;
