import React from "react";
import "./Header.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-hero" id="header">
      <div className="header-container">
        <div className="main-header">
          <div className="header-title-container">
            <div className="header-title">
              <h2>hello, I'm</h2>
              <h1>
                Abhijeet<span className="head-dot">.</span>Nana
                <span className="head-dot">.</span> Takle
                <span className="head-dot">.</span>
              </h1>
              <h2 className="red-title">a web developer.</h2>
              <p>
                As a self taught programmer I have learned many technologies
                with excitment. Strong in development and integration with
                intuitive problem-solving skills. Proficient in mordern web
                development tech stack. Self-motivated and hardworking, seeking
                for an opportunity to work in a challenging environment to
                utilize my skills, knowledge & intelligence in the growth of an
                important product with a wider impact radius.
              </p>
              <a
                className="resume-down"
                href="https://drive.google.com/file/d/1ecaLBjQc8t8fBIx2jXWxj1eWZ5vmGuav/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <div className="resume-dtext">resume</div>
                <FaArrowAltCircleRight />
              </a>
            </div>
          </div>
          <div className="header-image-container">
            <div className="header-blob">
              <img
                className="header-image"
                src={"assets/images/prof-img2.png"}
                alt="Profile"
              />
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
