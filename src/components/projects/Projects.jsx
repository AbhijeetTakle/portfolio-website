import React from "react";
import Project from "./Project";
import "./Projects.css";
import FloatingWindow from "./FloatingWindow";

const Projects = () => {
  const projectDetails = [
    {
      projectTitle: "BestMeds",
      projectDescription:
        "One stop online destination for all medicines and medical equipements.",
      projectDetail: `○ Created an easy to use and efficient online store to buy and sell medical equipment and drugs.
○ Used React framework for front-end and Nodejs for back-end.
○ Created admin dashboard and catalog feature, users cart and products page.
○ Used Redux for state management and sharing data.
○ Implemented Authentication for admins & users, user’s cart, product management and orders management with custom Rest API.
○ Used MongoDB database with Mongoose library and implemented schemas for validation of data received and sent.
○ Tech Stack Used: MongoDB, Express, React, Nodejs.`,
      projectVideoLink: "https://www.youtube.com/embed/7CqJlxBYj-M",
      projectLink1: "https://github.com/RagingScout95/shiny-broccoli",
      projectLink2: "https://github.com/AbhijeetTakle/animated-doodle",
      projectLinkTitle1: "front-end",
      projectLinkTitle2: "back-end",
      projectNumber: "project-one",
      projectLiveLink: "https://github.com/AbhijeetTakle/animated-doodle",
      projectImageLink: "assets/images/proj-1.png",
    },
    {
      projectTitle: "SocialLab",
      projectDescription: "Online chat application for collaboration and fun.",
      projectDetail: `○ Created a solution for collaboration of people by implementing a unique chat room system.
○ Created front-end with react and used express and Nodejs for back-end.
○ Used Socket.io API to enable communication with websockets.
○ Used websockets for communication because it is much faster.
○ Used Socket.io to implement a publisher-subscriber model with which any user can join chat rooms with the help of unique names and passwords.
○ Techs Used: React, Nodejs, Socket.io API.`,
      projectVideoLink: "https://www.youtube.com/embed/7CqJlxBYj-M",
      projectLink1: "https://github.com/AbhijeetTakle/client",
      projectLink2: "https://github.com/AbhijeetTakle/server",
      projectLinkTitle1: "front-end",
      projectLinkTitle2: "back-end",
      projectNumber: "project-two",
      projectLiveLink: "https://github.com/AbhijeetTakle/client",
      projectImageLink: "assets/images/proj-2.png",
    },
  ];
  return (
    <section className="projects-container" id="projects">
      <div className="projects-list-container">
        <div className="projects-list">
          <FloatingWindow
            projectTitle={projectDetails[0].projectTitle}
            projectDescription={projectDetails[0].projectDescription}
            projectDetail={projectDetails[0].projectDetail}
            projectVideoLink={projectDetails[0].projectVideoLink}
            projectLinkTitle1={projectDetails[0].projectLinkTitle1}
            projectLink1={projectDetails[0].projectLink1}
            projectLinkTitle2={projectDetails[0].projectLinkTitle2}
            projectLink2={projectDetails[0].projectLink2}
            projectNumber={projectDetails[0].projectNumber}
            projectLiveLink={projectDetails[0].projectLiveLink}
          />
          <FloatingWindow
            projectTitle={projectDetails[1].projectTitle}
            projectDescription={projectDetails[1].projectDescription}
            projectDetail={projectDetails[1].projectDetail}
            projectVideoLink={projectDetails[1].projectVideoLink}
            projectLinkTitle1={projectDetails[1].projectLinkTitle1}
            projectLink1={projectDetails[1].projectLink1}
            projectLinkTitle2={projectDetails[1].projectLinkTitle2}
            projectLink2={projectDetails[1].projectLink2}
            projectNumber={projectDetails[1].projectNumber}
            projectLiveLink={projectDetails[0].projectLiveLink}
          />
          <FloatingWindow
            projectTitle={projectDetails[0].projectTitle}
            projectDescription={projectDetails[0].projectDescription}
            projectDetail={projectDetails[0].projectDetail}
            projectVideoLink={projectDetails[0].projectVideoLink}
            projectLinkTitle1={projectDetails[0].projectLinkTitle1}
            projectLink1={projectDetails[0].projectLink1}
            projectLinkTitle2={projectDetails[0].projectLinkTitle2}
            projectLink2={projectDetails[0].projectLink2}
            projectNumber={projectDetails[0].projectNumber}
            projectLiveLink={projectDetails[0].projectLiveLink}
          />
          <FloatingWindow
            projectTitle={projectDetails[0].projectTitle}
            projectDescription={projectDetails[0].projectDescription}
            projectDetail={projectDetails[0].projectDetail}
            projectVideoLink={projectDetails[0].projectVideoLink}
            projectLinkTitle1={projectDetails[0].projectLinkTitle1}
            projectLink1={projectDetails[0].projectLink1}
            projectLinkTitle2={projectDetails[0].projectLinkTitle2}
            projectLink2={projectDetails[0].projectLink2}
            projectNumber={projectDetails[0].projectNumber}
            projectLiveLink={projectDetails[0].projectLiveLink}
          />
          <FloatingWindow
            projectTitle={projectDetails[0].projectTitle}
            projectDescription={projectDetails[0].projectDescription}
            projectDetail={projectDetails[0].projectDetail}
            projectVideoLink={projectDetails[0].projectVideoLink}
            projectLinkTitle1={projectDetails[0].projectLinkTitle1}
            projectLink1={projectDetails[0].projectLink1}
            projectLinkTitle2={projectDetails[0].projectLinkTitle2}
            projectLink2={projectDetails[0].projectLink2}
            projectNumber={projectDetails[0].projectNumber}
            projectLiveLink={projectDetails[0].projectLiveLink}
          />
          <FloatingWindow
            projectTitle={projectDetails[0].projectTitle}
            projectDescription={projectDetails[0].projectDescription}
            projectDetail={projectDetails[0].projectDetail}
            projectVideoLink={projectDetails[0].projectVideoLink}
            projectLinkTitle1={projectDetails[0].projectLinkTitle1}
            projectLink1={projectDetails[0].projectLink1}
            projectLinkTitle2={projectDetails[0].projectLinkTitle2}
            projectLink2={projectDetails[0].projectLink2}
            projectNumber={projectDetails[0].projectNumber}
            projectLiveLink={projectDetails[0].projectLiveLink}
          />

          <Project
            projectTitle={projectDetails[0].projectTitle}
            projectNumber={projectDetails[0].projectNumber}
            projectDescription={projectDetails[0].projectDescription}
            projectLiveLink={projectDetails[0].projectLiveLink}
            projectImageLink={projectDetails[0].projectImageLink}
          />

          <Project
            projectTitle={projectDetails[1].projectTitle}
            projectNumber={projectDetails[1].projectNumber}
            projectDescription={projectDetails[1].projectDescription}
            projectLiveLink={projectDetails[1].projectLiveLink}
            projectImageLink={projectDetails[1].projectImageLink}
          />
          <Project
            comingSoon={true}
            projectTitle=""
            projectNumber=""
            projectDescription=""
            projectLiveLink=""
          />
          <Project
            comingSoon={true}
            projectTitle=""
            projectNumber=""
            projectDescription=""
            projectLiveLink=""
          />
          <Project
            comingSoon={true}
            projectTitle=""
            projectNumber=""
            projectDescription=""
            projectLiveLink=""
          />
          <Project
            comingSoon={true}
            projectTitle=""
            projectNumber=""
            projectDescription=""
            projectLiveLink=""
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
