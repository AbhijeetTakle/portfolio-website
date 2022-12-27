import React from "react";
import "./Header.css";
import ProfileImage from "../../assets/images/prof-img2.png";
// import BackgroudVideo from "../../assets/videos/dots.mp4";

const Header = () => {
  return (
    <div className="header-hero" id="header">
      {/* <video
        className="back-video"
        muted
        autoPlay
        loop
        playsInline
        src={BackgroudVideo}
      ></video> */}
      <div className="header-container">
        <div className="main-header">
          <div className="header-title-container">
            <div className="header-title">
              <h2>Hello, I'm</h2>
              <h1>Abhijeet Nana Takle</h1>
              <h2>a Web Developer.</h2>
            </div>
          </div>
          <div className="header-image-container">
            <div className="header-blob">
              <img className="header-image" src={ProfileImage} alt="Profile" />
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="mouse-scroll">
            <div className="scroll-ball"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
