import React from "react";
import Skill from "./Skill";
import "./Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaPython,
  FaNpm,
  FaFigma,
  FaDocker,
  FaAws,
} from "react-icons/fa";
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
  SiCanva,
  SiAdobephotoshop,
  SiVisualstudiocode,
  SiNotion,
  SiRedux,
  SiHeroku,
  SiNetlify,
  SiSelenium,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <div className="skills-section-container">
        <div className="skills-sections">
          <div className="frontend-skills skills-section">
            <div className="section-skill">Front-end</div>
            <div className="skills-logo-container">
              <Skill skillName="React" skillColor="rgb(3, 119, 252)">
                <FaReact />
              </Skill>
              <Skill skillName="HTML5" skillColor="rgb(250, 104, 0)">
                <FaHtml5 />
              </Skill>
              <Skill skillName="CSS3" skillColor="rgb(1, 16, 143)">
                <FaCss3 />
              </Skill>
              <Skill skillName="Javascript" skillColor="rgb(240, 197, 5)">
                <IoLogoJavascript />
              </Skill>
              <Skill skillName="MaterialUI" skillColor="rgb(13, 37, 252)">
                <SiMaterialui />
              </Skill>
              <Skill skillName="TailwindCss" skillColor="rgb(2, 236, 240  )">
                <SiTailwindcss />
              </Skill>
              {/* <Skill skillName="Sass" skillColor="rgb(212, 19, 237)">
                <FaSass />
              </Skill> */}
              <Skill skillName="Bootstrap" skillColor="rgb(118, 2, 250)">
                <FaBootstrap />
              </Skill>
              <Skill skillName="Figma" skillColor="rgb(240, 5, 75)">
                <FaFigma />
              </Skill>
              <Skill skillName="Canva" skillColor="rgb(0, 113, 194)">
                <SiCanva />
              </Skill>
              <Skill skillName="Photoshop" skillColor="rgb(3, 37, 89)">
                <SiAdobephotoshop />
              </Skill>
              <Skill skillName="Vscode" skillColor="rgb(6, 88, 212)">
                <SiVisualstudiocode />
              </Skill>
              <Skill skillName="Redux" skillColor="rgb(108, 47, 194)">
                <SiRedux />
              </Skill>
              {/* <Skill skillName="Typescript" skillColor="rgb(6, 93, 207)">
                <SiTypescript />
              </Skill>
              <Skill skillName="Nextjs" skillColor="rgb(255, 255, 255)">
                <TbBrandNextjs />
              </Skill> */}
            </div>
            <div className="skills-logo-container">
              <Skill skillName="React" skillColor="rgb(3, 119, 252)">
                <FaReact />
              </Skill>
              <Skill skillName="HTML5" skillColor="rgb(250, 104, 0)">
                <FaHtml5 />
              </Skill>
              <Skill skillName="CSS3" skillColor="rgb(1, 16, 143)">
                <FaCss3 />
              </Skill>
              <Skill skillName="Javascript" skillColor="rgb(240, 197, 5)">
                <IoLogoJavascript />
              </Skill>
              <Skill skillName="MaterialUI" skillColor="rgb(13, 37, 252)">
                <SiMaterialui />
              </Skill>
              <Skill skillName="TailwindCss" skillColor="rgb(2, 236, 240  )">
                <SiTailwindcss />
              </Skill>
              {/* <Skill skillName="Sass" skillColor="rgb(212, 19, 237)">
                <FaSass />
              </Skill> */}
              <Skill skillName="Bootstrap" skillColor="rgb(118, 2, 250)">
                <FaBootstrap />
              </Skill>
              <Skill skillName="Figma" skillColor="rgb(240, 5, 75)">
                <FaFigma />
              </Skill>
              <Skill skillName="Canva" skillColor="rgb(0, 113, 194)">
                <SiCanva />
              </Skill>
              <Skill skillName="Photoshop" skillColor="rgb(3, 37, 89)">
                <SiAdobephotoshop />
              </Skill>
              <Skill skillName="Vscode" skillColor="rgb(6, 88, 212)">
                <SiVisualstudiocode />
              </Skill>
              <Skill skillName="Redux" skillColor="rgb(108, 47, 194)">
                <SiRedux />
              </Skill>
              {/* <Skill skillName="Typescript" skillColor="rgb(6, 93, 207)">
                <SiTypescript />
              </Skill>
              <Skill skillName="Nextjs" skillColor="rgb(255, 255, 255)">
                <TbBrandNextjs />
              </Skill> */}
            </div>
          </div>
          <div className="devops-skills skills-section">
            <div className="section-skill">Devops</div>
            <div className="skills-logo-container">
              <Skill skillName="Git" skillColor="rgb(240, 76, 58)">
                <SiGit />
              </Skill>
              <Skill skillName="Docker" skillColor="rgb(27, 148, 247)">
                <FaDocker />
              </Skill>
              <Skill skillName="Aws" skillColor="rgb(247, 147, 32)">
                <FaAws />
              </Skill>
              {/* <Skill skillName="Kubernetes" skillColor="rgb(66, 66, 66)">
                <SiKubernetes />
              </Skill>
              <Skill skillName="Jenkins" skillColor="rgb(212, 23, 13)">
                <FaJenkins />
              </Skill> */}
              <Skill skillName="Github" skillColor="rgb()">
                <SiGithub />
              </Skill>
              {/* <Skill skillName="Azure" skillColor="rgb(8, 83, 196)">
                <SiMicrosoftazure />
              </Skill>
              <Skill skillName="Bootstrap" skillColor="rgb(118, 2, 250)">
                <FaBootstrap />
              </Skill>
              <Skill skillName="Gradle" skillColor="rgb(98, 196, 134)">
                <SiGradle />
              </Skill> */}
              <Skill skillName="Heroku" skillColor="rgb(69, 25, 140)">
                <SiHeroku />
              </Skill>
              {/* <Skill skillName="Photoshop" skillColor="rgb(17, 33, 89)">
                <SiAdobephotoshop />
              </Skill> */}
              <Skill skillName="Netlify" skillColor="rgb(7, 159, 219)">
                <SiNetlify />
              </Skill>
              <Skill skillName="Selenium" skillColor="rgb(102, 237, 5)">
                <SiSelenium />
              </Skill>
            </div>
            <div className="skills-logo-container">
              <Skill skillName="Git" skillColor="rgb(240, 76, 58)">
                <SiGit />
              </Skill>
              <Skill skillName="Docker" skillColor="rgb(27, 148, 247)">
                <FaDocker />
              </Skill>
              <Skill skillName="Aws" skillColor="rgb(247, 147, 32)">
                <FaAws />
              </Skill>
              {/* <Skill skillName="Kubernetes" skillColor="rgb(66, 66, 66)">
                <SiKubernetes />
              </Skill>
              <Skill skillName="Jenkins" skillColor="rgb(212, 23, 13)">
                <FaJenkins />
              </Skill> */}
              <Skill skillName="Github" skillColor="rgb()">
                <SiGithub />
              </Skill>
              {/* <Skill skillName="Azure" skillColor="rgb(8, 83, 196)">
                <SiMicrosoftazure />
              </Skill>
              <Skill skillName="Bootstrap" skillColor="rgb(118, 2, 250)">
                <FaBootstrap />
              </Skill>
              <Skill skillName="Gradle" skillColor="rgb(98, 196, 134)">
                <SiGradle />
              </Skill> */}
              <Skill skillName="Heroku" skillColor="rgb(69, 25, 140)">
                <SiHeroku />
              </Skill>
              {/* <Skill skillName="Photoshop" skillColor="rgb(17, 33, 89)">
                <SiAdobephotoshop />
              </Skill> */}
              <Skill skillName="Netlify" skillColor="rgb(7, 159, 219)">
                <SiNetlify />
              </Skill>
              <Skill skillName="Selenium" skillColor="rgb(102, 237, 5)">
                <SiSelenium />
              </Skill>
            </div>
            <div className="skills-logo-container">
              <Skill skillName="Git" skillColor="rgb(240, 76, 58)">
                <SiGit />
              </Skill>
              <Skill skillName="Docker" skillColor="rgb(27, 148, 247)">
                <FaDocker />
              </Skill>
              <Skill skillName="Aws" skillColor="rgb(247, 147, 32)">
                <FaAws />
              </Skill>
              {/* <Skill skillName="Kubernetes" skillColor="rgb(66, 66, 66)">
                <SiKubernetes />
              </Skill>
              <Skill skillName="Jenkins" skillColor="rgb(212, 23, 13)">
                <FaJenkins />
              </Skill> */}
              <Skill skillName="Github" skillColor="rgb()">
                <SiGithub />
              </Skill>
              {/* <Skill skillName="Azure" skillColor="rgb(8, 83, 196)">
                <SiMicrosoftazure />
              </Skill>
              <Skill skillName="Bootstrap" skillColor="rgb(118, 2, 250)">
                <FaBootstrap />
              </Skill>
              <Skill skillName="Gradle" skillColor="rgb(98, 196, 134)">
                <SiGradle />
              </Skill> */}
              <Skill skillName="Heroku" skillColor="rgb(69, 25, 140)">
                <SiHeroku />
              </Skill>
              {/* <Skill skillName="Photoshop" skillColor="rgb(17, 33, 89)">
                <SiAdobephotoshop />
              </Skill> */}
              <Skill skillName="Netlify" skillColor="rgb(7, 159, 219)">
                <SiNetlify />
              </Skill>
              <Skill skillName="Selenium" skillColor="rgb(102, 237, 5)">
                <SiSelenium />
              </Skill>
            </div>
          </div>
          <div className="backend-skills skills-section">
            <div className="section-skill">Back-end</div>
            <div className="skills-logo-container">
              <Skill skillName="Nodejs" skillColor="rgb(63, 140, 81)">
                <SiNodedotjs />
              </Skill>
              <Skill skillName="Express" skillColor="rgb()">
                <SiExpress />
              </Skill>
              <Skill skillName="MongoDB" skillColor="rgb(2, 247, 60)">
                <SiMongodb />
              </Skill>
              <Skill skillName="Sql" skillColor="rgb(244, 80, 250)">
                <SiMysql />
              </Skill>
              <Skill skillName="Java" skillColor="rgb(88, 129, 161)">
                <SiJava />
              </Skill>
              <Skill skillName="Python" skillColor="rgb(242, 223, 51)">
                <FaPython />
              </Skill>
              <Skill skillName="NPM" skillColor="rgb(242, 31, 7)">
                <FaNpm />
              </Skill>
              {/* <Skill skillName="Django" skillColor="rgb(22, 41, 24)">
                <SiDjango />
              </Skill> */}
              <Skill skillName="Notion" skillColor="rgb()">
                <SiNotion />
              </Skill>
              <Skill skillName="C++" skillColor="rgb(7, 58, 130)">
                <SiCplusplus />
              </Skill>
              <Skill skillName="C" skillColor="rgb(153, 247, 241)">
                <SiC />
              </Skill>
              {/* <Skill skillName="Go" skillColor="rgb(43, 94, 224)">
                <GrGolang />
              </Skill> */}
              <Skill skillName="Linux" skillColor="rgb(247, 247, 2)">
                <FcLinux />
              </Skill>
            </div>
            <div className="skills-logo-container">
              <Skill skillName="Nodejs" skillColor="rgb(63, 140, 81)">
                <SiNodedotjs />
              </Skill>
              <Skill skillName="Express" skillColor="rgb()">
                <SiExpress />
              </Skill>
              <Skill skillName="MongoDB" skillColor="rgb(2, 247, 60)">
                <SiMongodb />
              </Skill>
              <Skill skillName="Sql" skillColor="rgb(244, 80, 250)">
                <SiMysql />
              </Skill>
              <Skill skillName="Java" skillColor="rgb(88, 129, 161)">
                <SiJava />
              </Skill>
              <Skill skillName="Python" skillColor="rgb(242, 223, 51)">
                <FaPython />
              </Skill>
              <Skill skillName="NPM" skillColor="rgb(242, 31, 7)">
                <FaNpm />
              </Skill>
              {/* <Skill skillName="Django" skillColor="rgb(22, 41, 24)">
                <SiDjango />
              </Skill> */}
              <Skill skillName="Notion" skillColor="rgb()">
                <SiNotion />
              </Skill>
              <Skill skillName="C++" skillColor="rgb(7, 58, 130)">
                <SiCplusplus />
              </Skill>
              <Skill skillName="C" skillColor="rgb(153, 247, 241)">
                <SiC />
              </Skill>
              {/* <Skill skillName="Go" skillColor="rgb(43, 94, 224)">
                <GrGolang />
              </Skill> */}
              <Skill skillName="Linux" skillColor="rgb(247, 247, 2)">
                <FcLinux />
              </Skill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
