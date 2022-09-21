import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/Projects/ProjectCards";
// import Particle from "../Particle";
import closet from "../../assets/projects/closet.png";
import flash from "../../assets/projects/flash.png";
import game from "../../assets/projects/game.png";
import map from "../../assets/projects/map.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={closet}
              isBlog={false}
              title="OpenCloset"
              description="A digital aid that supports you by allowing you to orginize, plan, and experiment with the clothes in your closet by using photos to log each item of clothing. From those items, you can create different looks, storing them for easy reference to utilize every part of your wardrobe. Once everything is logged, who knows, maybe that long forgotten about top will go perfectly with that new pair of pants you can't figure out how to wear? "
              ghLink="https://github.com/Mhawkins28/OpenCloset-Client"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={map}
              isBlog={false}
              title="PinIt"
              description="A social app where users can see a map consisting of people’s favorite places. These places are pins that users can select and add to their profile. Pins are categorized by cities, so users will have profile pages that list their pins."
              ghLink="https://github.com/Mhawkins28/PinIt-Frontend"
              demoLink="https://jmmz-ga-p3places-ui.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Boardgame Strategist"
              description="A catalog app that allows the user to store all the boardgames in their collection so that they can keep track of them and be ready for any game night or party. There's flexibility to create, edit, or delete games, making this application unique to each user!"
              ghLink="https://github.com/Mhawkins28/BoardGame_App"
              demoLink="http://boardgame-strategist-app2.herokuapp.com/auth"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flash}
              isBlog={false}
              title="Flashcard App"
              description="A frontend flashcard application to assist people with learning and memorizing concepts of a subject for the Bar Exam. This is the beginning of my coding career, and the first app I created."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://mhawkins28.github.io/Flashcard-App/start.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;