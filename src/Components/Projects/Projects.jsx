import { useState } from "react";
import SingleProject from "../SingleProject/SingleProject";
import "./Projects.css";

import dheechatone from "../../assets/images/dheechat/dhee home.png";
import dheechattwo from "../../assets/images/dheechat/dhee register4.png";


import arrow from "../../assets/icons/view-more-arrow.svg";

function Projects() {
  const [projects, setProjects] = useState([
    {
      name: "DheeChat",
      description:
        "DheeChat is a web application designed to facilitate seamless communication between users. It allows users to send messages, create and manage groups, search for friends, and receive notifications—all in real time. With a sleek interface, DheeChat ensures that users stay connected effortlessly while navigating their busy online activities.",
      stack: [
        "ReactJS",
        "Bootstrap",
        "JavaScript",
        "MongoDB",
        "NodeJs",
        "ExpressJs",
      ],
      images: [dheechatone,dheechattwo],
      links: [
        "https://dheechat.netlify.app/",
        "https://github.com/Yukechan2002/ChatApplication-FE",
      ],
    },
  ]);

  const mappedProjects = projects.map(
    ({ name, description, stack, images, links }) => {
      return (
        <SingleProject
          key={name}
          name={name}
          description={description}
          stack={stack}
          images={images}
          links={links}
        />
      );
    }
  );
  return (
    <section className="projects">
      <div className="projects-inner">
        <h1 id="projects">PROJECTS</h1>

        <div className="projects-container">{mappedProjects}</div>

        <a
          href="https://github.com/Yukechan2002?tab=repositories"
          target="_blank"
        >
          <button className="view-more">
            View more on Github
            <img src={arrow} alt="" />
          </button>
        </a>
      </div>
    </section>
  );
}

export default Projects;
