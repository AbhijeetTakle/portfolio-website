import React from "react";
import Project from "./Project";
import "./Projects.css";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const Projects = () => {
  const viewMoreFunction = (e) => {
    const parentElement = document.querySelector(".projects-list");
    if (parentElement.scrollTop >= 768) {
      const element = document.querySelector(".project-view-bottom");
      element.style.display = "none";
      const element1 = document.querySelector(".project-view-top");
      element1.style.display = "block";
    }
    parentElement.scrollTop =
      parentElement.scrollTop + parentElement.scrollHeight * 0.25;
  };

  const projectViewTop = (e) => {
    const parentElement = document.querySelector(".projects-list");
    const element1 = document.querySelector(".project-view-top");
    element1.style.display = "none";
    parentElement.scrollTop = parentElement.scrollTop * 0;
  };

  const projectListScrollEvent = (e) => {
    const parentElement = document.querySelector(".projects-list");
    if (parentElement.scrollTop < 600) {
      const element = document.querySelector(".project-view-bottom");
      element.style.display = "block";
      const element1 = document.querySelector(".project-view-top");
      element1.style.display = "none";
    }
  };

  return (
    <section className="projects-container" id="projects">
      <div className="projects-list-container">
        <div className="projects-list" onScroll={projectListScrollEvent}>
          <Project
            projectTitle="hello world"
            projectDescription="
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magnam animi natus expedita odio! Minus, eos. Suscipit nemo, ratione in corrupti sint eligendi ducimus voluptatibus rem quo harum adipisci, maxime aperiam omnis et commodi libero cumque ad? Vel aliquam voluptas ex, ipsam molestiae alias iste. Repudiandae magnam voluptatibus voluptatum quaerat."
            projectVideoLink="https://www.youtube.com/watch?v=_oO4Qi5aVZs"
            projectDemoLink=""
            projectCodeLink=""
          />
          <Project
            projectTitle="hello world"
            projectDescription="
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magnam animi natus expedita odio! Minus, eos. Suscipit nemo, ratione in corrupti sint eligendi ducimus voluptatibus rem quo harum adipisci, maxime aperiam omnis et commodi libero cumque ad? Vel aliquam voluptas ex, ipsam molestiae alias iste. Repudiandae magnam voluptatibus voluptatum quaerat."
            projectVideoLink="https://www.youtube.com/watch?v=_oO4Qi5aVZs"
            projectDemoLink=""
            projectCodeLink=""
          />
          <Project
            projectTitle="hello world"
            projectDescription="
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magnam animi natus expedita odio! Minus, eos. Suscipit nemo, ratione in corrupti sint eligendi ducimus voluptatibus rem quo harum adipisci, maxime aperiam omnis et commodi libero cumque ad? Vel aliquam voluptas ex, ipsam molestiae alias iste. Repudiandae magnam voluptatibus voluptatum quaerat."
            projectVideoLink="https://www.youtube.com/watch?v=_oO4Qi5aVZs"
            projectDemoLink=""
            projectCodeLink=""
          />
          <Project
            projectTitle="hello world"
            projectDescription="
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magnam animi natus expedita odio! Minus, eos. Suscipit nemo, ratione in corrupti sint eligendi ducimus voluptatibus rem quo harum adipisci, maxime aperiam omnis et commodi libero cumque ad? Vel aliquam voluptas ex, ipsam molestiae alias iste. Repudiandae magnam voluptatibus voluptatum quaerat."
            projectVideoLink="https://www.youtube.com/watch?v=_oO4Qi5aVZs"
            projectDemoLink=""
            projectCodeLink=""
          />
        </div>
        <div className="project-view-more-btn">
          <span className="view-more-btn-title">veiw more.</span>
          <FaArrowCircleDown
            onClick={viewMoreFunction}
            className="project-view-bottom"
          />
          <FaArrowCircleUp
            onClick={projectViewTop}
            className="project-view-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
