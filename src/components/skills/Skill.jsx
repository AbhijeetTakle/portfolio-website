import React from "react";
import "./Skill.css";

const Skill = (props) => {
  return (
    <div className="skill-container" style={{ color: `${props.skillColor}` }}>
      {props.children}
      <div className="skill-title-container">
        <span className="skill-title">{props.skillName}</span>
      </div>
    </div>
  );
};

export default Skill;
