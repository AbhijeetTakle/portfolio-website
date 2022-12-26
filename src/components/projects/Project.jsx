import React from "react";
import ProjectLinkButton from "./ProjectLinkButton";
import "./Project.css";

const Project = (props) => {
  return (
    <section className="project-container">
      <div className="project-info-container">
        <div className="project-title-container">
          <h3 className="project-title">{props.projectTitle}</h3>
        </div>
        <div className="project-description-container">
          <p className="project-description">{props.projectDescription}</p>
        </div>
        <div className="project-links-container">
          <ProjectLinkButton
            link_type="demo-btn"
            link_string={props.projectDemoLink}
            link_text="Live"
          />
          <ProjectLinkButton
            link_type="code-btn"
            link_string={props.projectCodeLink}
            link_text="Source"
          />
        </div>
      </div>
      <div className="project-video-container">
        <div className="project-video">
          <iframe
            src="https://www.youtube.com/embed/xNRJwmlRBNU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Project;
