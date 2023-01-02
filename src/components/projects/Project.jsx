import React, { useEffect } from "react";
import ProjectLinkButton from "./ProjectLinkButton";
import "./Project.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Project = (props) => {
  const floatinWindowToggle = (e) => {
    e.preventDefault();
    const classwin = ".win-" + e.target.classList[1];
    const projectwindow = document.querySelector(classwin);
    projectwindow.style.display = "block";
  };

  return (
    <section className="project-container">
      {props.comingSoon === true ? (
        <div className={"coming-soon " + props.projectNumber + "cs"}>
          <p>coming soon!</p>
        </div>
      ) : (
        ""
      )}
      <div className="project-info-container">
        <div className="project-description-container">
          <p className="project-description">{props.projectDescription}</p>
        </div>
        <div className="project-title-container">
          <a
            href={props.projectLiveLink}
            target="_blank"
            className="project-title"
          >
            {props.projectTitle}
          </a>
          <a className="arrow-project ">
            <FaArrowAltCircleRight />
            <div
              className={"click-div " + props.projectNumber}
              onClick={floatinWindowToggle}
            ></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
