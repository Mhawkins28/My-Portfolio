import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPostgresql,
} from "react-icons/di";
import { SiPrisma, SiNextdotjs, SiVite } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJsBadge />
        <p className='text'>Javascript</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
        <p className='text'>React</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <TbBrandNextjs />
        <p className='text'>Next.js</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVite />
        <p className='text'>Vite</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
        <p className='text'>Node.js</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
        <p className='text'>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPrisma />
        <p className='text'>Prisma</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiPython />
        <p className='text'>Python</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiPostgresql />
        <p className='text'>PSQL</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
        <p className='text'>Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
