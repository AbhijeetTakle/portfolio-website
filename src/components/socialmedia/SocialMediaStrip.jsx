import React, { useEffect } from "react";
import "./socialmediastrip.css";
import { SiGmail } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { TfiLinkedin } from "react-icons/tfi";
import { GrMedium } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const SocialMediaStrip = () => {
  const scrollPercentage = (e) => {
    setTimeout(() => {}, 3000);
    const scrolled = window.scrollY;
    let scrollPercent = (scrolled - 100) / 400;
    const strip = document.querySelector(".social-media-strip");
    const eles = document.querySelectorAll(".social-icons");

    if (window.screen.width <= 821 && scrolled >= 50) {
      strip.style.display = "none";
      return;
    } else {
      strip.style.display = "flex";
    }
    if (scrolled > 0 && scrolled <= 100) {
      strip.style.transform = `translateY(-${0}px) translateX(-${
        80 * scrollPercent
      }%) rotateZ(${0}deg)`;
      eles.forEach((ele) => {
        ele.style.transform = `rotateZ(-${0}deg)`;
      });
    } else if (scrolled > 100 && scrolled <= 500) {
      strip.style.transform = `translateY(-${
        200 * scrollPercent
      }px) translateX(-${80 * scrollPercent}%) rotateZ(${
        90 * scrollPercent
      }deg)`;
      eles.forEach((ele) => {
        ele.style.transform = `rotateZ(-${90 * scrollPercent}deg)`;
      });
    } else if (scrolled > 300) {
      strip.style.transform = `translateY(-${200}px) translateX(-${80}%) rotateZ(${90}deg)`;
      eles.forEach((ele) => {
        ele.style.transform = `rotateZ(-${90}deg)`;
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollPercentage);
  }, []);

  return (
    <div className="social-media-strip">
      <div className="mail-icon social-icons">
        <SiGmail />
      </div>
      <div className="git-icon social-icons">
        <VscGithub />
      </div>
      <div className="linkedin-icon social-icons">
        <TfiLinkedin />
      </div>
      <div className="medium-icon social-icons">
        <GrMedium />
      </div>
      <div className="youtube-icon social-icons">
        <BsYoutube />
      </div>
      <div className="insta-icon social-icons">
        <FaInstagram />
      </div>
    </div>
  );
};

export default SocialMediaStrip;
