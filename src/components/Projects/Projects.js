import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ceasar-Cipher"
              description="Caesar Cipher is used to encode and decode the messages . We need to enter the the message in the text box and also enter a key value and then click on encrypt button. The message is encrypted to the user and can be decrypted with key"
              ghLink="https://github.com/adityakhevaria/Caecer-Cipher.git"
              demoLink="caecer-cipherr.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hotel-Website"
              description="This modern and user-friendly website offers a seamless booking experience for travelers seeking comfortable and affordable accommodations. With an intuitive interface, it showcases detailed information about rooms, amenities, and special offers."
              ghLink="https://github.com/adityakhevaria/Villa-Hotel-Website"
              demoLink="https://adityakhevaria.github.io/Villa-Hotel-Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Todo-App"
              description="This sleek and intuitive application helps users efficiently manage their tasks and stay organized. With features like task creation, prioritization, and due dates. The app’s clean interface and responsive design ensure a smooth experience across various devices."
              ghLink="https://github.com/adityakhevaria/To-do-App"
              demoLink="myown-todo-app.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Blog-Page"
              description="This dynamic blog page provides insightful articles, expert opinions, and engaging content on a variety of topics. With an easy-to-navigate layout and clean design, readers can effortlessly explore posts, categories, and comments. The page ensures a visually appealing and user-friendly experience for both casual readers and dedicated followers"
              ghLink="https://github.com/adityakhevaria/Blog-page"
              demoLink="blog-pagee.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Incubation-Center-Website"
              description="This comprehensive platform connects startups with the resources, mentorship, and funding they need to thrive. With a focus on fostering innovation, the website offers detailed information on programs, facilities, and success stories. Its user-friendly interface ensures seamless navigation for entrepreneurs, investors, and partners alike."
              ghLink="https://github.com/adityakhevaria/incubation-centre-django"
              demoLink="incubation-center.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Drum-Kit"
              description="This interactive and engaging app allows users to play a virtual drum kit with ease. Featuring a variety of drum sounds and customizable kits, it offers a realistic drumming experience for beginners and professionals alike. The app’s intuitive layout and responsive design make it accessible across devices for a fun and creative experience"
              ghLink="https://github.com/adityakhevaria/Drum-Kit"
              demoLink="my--drum-kit.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
