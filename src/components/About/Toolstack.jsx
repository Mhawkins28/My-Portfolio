import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGithub,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiNetlify, 
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className='text'>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className='text'>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p className='text'>Heroku</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <p className='text'>Netlify</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGithub />
      <p className='text'>GitHub</p>
      </Col>
    </Row>
  );
}

export default Toolstack;