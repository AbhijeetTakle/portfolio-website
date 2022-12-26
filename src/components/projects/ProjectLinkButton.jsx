import React from "react";
import "./ProjectLinkButton.css";

const ProjectLinkButton = (props) => {
  return (
    <div className={"project-link-container " + props.link_type}>
      <a href={props.link_string}>{props.link_text}</a>
    </div>
  );
};

export default ProjectLinkButton;
