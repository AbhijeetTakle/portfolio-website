import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "./FloatingWindow.css";

const FloatingWindow = (props) => {
  const floatinWindowToggle = (e) => {
    e.preventDefault();
    const classwin = ".win-" + e.target.classList[1];
    const projectwindow = document.querySelector(classwin);
    projectwindow.style.display = "none";
    var iframe = projectwindow.querySelector("iframe");
    if (iframe) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
  };
  return (
    <div className={"float-window-container " + "win-" + props.projectNumber}>
      <div className="float-window">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={props.projectVideoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="info-title-container">
          <a
            href={props.projectLiveLink}
            target="_blank"
            className="info-title"
          >
            {props.projectTitle}
          </a>
          <a className="source-links" href={props.projectLink1} target="_blank">
            <div className="resume-dtext">{props.projectLinkTitle1}</div>
            <FaArrowAltCircleRight />
          </a>
          <a className="source-links" href={props.projectLink2} target="_blank">
            <div className="resume-dtext">{props.projectLinkTitle2}</div>
            <FaArrowAltCircleRight />
          </a>
        </div>
        <div className="info-container">
          <div className="project-head">{props.projectDescription}</div>
          {props.projectDetail}
        </div>
      </div>
      <div className="float-relax ">
        <div
          className={"click-div " + props.projectNumber}
          onClick={floatinWindowToggle}
        ></div>
        <MdOutlineClose />
      </div>
    </div>
  );
};

export default FloatingWindow;
