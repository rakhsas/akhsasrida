import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import ft_transcendance from "../../Assets/Projects/ft_transcendance.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import JobPilot from "../../Assets/Projects/JobPilot.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ft_transcendance}
              isBlog={false}
              title="ft_transcendance"
              description="Web Application project designed to build a competitive online multiplayer game where players can play a game of pong against each other. The game is to be integrated into a fully featured web application which includes a public chat, private messaging, with the option of video call, real-time notifications, and an administration interface."
              ghLink="https://github.com/rakhsas/transcendence"
              demoLink="s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JobPilot}
              isBlog={false}
              title="JobPilot"
              description="Web Application project designed to build a job portal where users can search for jobs, apply for jobs, and post jobs. The application also includes a chat feature where users can chat with each other. The application also includes a feature where users can create a resume and download it in PDF format."
              ghLink="https://github.com/rakhsas/JobPilot"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cestoliv.com/projects/imgs/42/inception.webp"
              isBlog={false}
              title="Inception"
              description="project is an immersive dive into system and network administration. It involves setting up a virtual cluster of machines using a technology stack that includes Docker and Docker-compose. The project aims to simulate a potential real-life scenario where students are required to deploy multiple services, each running in its own dedicated container. These services include a Wordpress website, a Postgres database, a adminer interface, and others."
              ghLink="https://github.com/rakhsas/inception"
              demoLink="https://www.youtube.com/watch?v=BjbhxtUjkhg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://camo.githubusercontent.com/18af82182998310f8827901d8168dc6678491dd45d60987dc307b6babefdde3e/68747470733a2f2f69312e61652f696d672f776562736572762f4347492e6a7067"
              isBlog={false}
              title="WebServer"
              description="A simple web server that can handle multiple connections at the same time. taking Nginx as a reference, this project is an introduction to the implementation of a web server using the C++ language. The server is able to handle GET, POST, PUT, DELETE requests. The server is also able to handle multiple clients at the same time. Using C++ language."
              ghLink="https://github.com/Hamza-benfaddoul/webserv"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Mowadaba"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
