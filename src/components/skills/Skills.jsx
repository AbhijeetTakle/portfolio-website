import React from "react";
import Skill from "./Skill";
import "./Skills.css";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiMaterialui,
  SiJava,
  SiNodedotjs,
  SiGithub,
  SiGit,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <div className="skills-section-container">
        <div className="skills-sections">
          <a href="#skills-frontend-logos">
            <div className="skills-frontend skills-section">Frontend</div>
          </a>
          <a href="#skills-middleware-logos">
            <div className="skills-middleware skills-section">Middleware</div>
          </a>
          <a href="#skills-backend-logos">
            <div className="skills-backend skills-section">Backend</div>
          </a>
        </div>
        <div className="skills-logos-container">
          <div className="logos-container">
            <div className="logos-section" id="skills-frontend-logos">
              <Skill skillName="React" skillColor="#179da1">
                <FaReact />
              </Skill>
              <Skill skillName="HTML" skillColor="#ff3c00">
                <FaHtml5 />
              </Skill>
              <Skill skillName="CSS" skillColor="#0080ff">
                <FaCss3 />
              </Skill>
              <Skill skillName="Javascript" skillColor="#ffdd00">
                <IoLogoJavascript />
              </Skill>
              <Skill skillName="Tailwind CSS" skillColor="#06d0e2">
                <SiTailwindcss />
              </Skill>
              <Skill skillName="Material UI" skillColor="#0034c5">
                <SiMaterialui />
              </Skill>
            </div>
            <div className="logos-section" id="skills-middleware-logos">
              <Skill skillName="Git" skillColor="#d9500b">
                <SiGit />
              </Skill>
              <Skill skillName="Express" skillColor="#b52076">
                <SiExpress />
              </Skill>
              <Skill skillName="Github" skillColor="#000000">
                <SiGithub />
              </Skill>
              <Skill skillName="React" skillColor="#179da1">
                <FaReact />
              </Skill>
            </div>
            <div className="logos-section" id="skills-backend-logos">
              <Skill skillName="NodeJS" skillColor="#006c22">
                <SiNodedotjs />
              </Skill>
              <Skill skillName="MongoDB" skillColor="#12b245">
                <SiMongodb />
              </Skill>
              <Skill skillName="Mongoose" skillColor="#179da1">
                <FaReact />
              </Skill>
              <Skill skillName="Java" skillColor="#d90000">
                <SiJava />
              </Skill>
              <Skill skillName="SQL" skillColor="#62b8be">
                <SiMysql />
              </Skill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
