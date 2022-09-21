
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import GithubElement from "../../components/About/GithubElement";
import Toolstack from "../../components/About/Toolstack";
import Techstack from "../../components/About/Techstack";
import AboutCard from "../../components/About/AboutCard";
import laptopImg from "../../assets/about.png";


function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              ABOUT <strong className="purple">ME</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <GithubElement />
      </Container>
    </Container>
  );
}

export default About;