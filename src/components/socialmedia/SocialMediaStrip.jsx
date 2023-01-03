import React, { useEffect } from "react";
import "./socialmediastrip.css";
import { SiGmail } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { TfiLinkedin } from "react-icons/tfi";
import { GrMedium } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const SocialMediaStrip = () => {
  return (
    <div className="social-media-strip">
      <div className="unlayered">
        <span>social media</span>
      </div>
      <div className="mail-icon social-icons">
        <a href="mailto:abhijeettakle35@gmail.com">
          <SiGmail />
        </a>
      </div>
      <div className="git-icon social-icons">
        <a
          rel="noopener noreferrer"
          href="https://github.com/AbhijeetTakle"
          target="_blank"
        >
          <VscGithub />
        </a>
      </div>
      <div className="linkedin-icon social-icons">
        <a
          rel="noopener noreferrer"
          href="https://in.linkedin.com/in/abhijeet-takle-139b1b193"
          target="_blank"
        >
          <TfiLinkedin />
        </a>
      </div>
      <div className="medium-icon social-icons">
        <a
          rel="noopener noreferrer"
          href="https://medium.com/@abhijeettakle35"
          target="_blank"
        >
          <GrMedium />
        </a>
      </div>
      <div className="youtube-icon social-icons">
        <a
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCBu9vInFe1j9DPd9BE0NVyw"
          target="_blank"
        >
          <BsYoutube />
        </a>
      </div>
      <div className="insta-icon social-icons">
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/_abhijeettakle/"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaStrip;
