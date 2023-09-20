import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../components/Partricles";

const resume = "resume.pdf";

function Resume() {
  return (
    <Container fluid className='resume-section'>
      <Particle />
      <div className='resume'>
        <Button
          variant='primary'
          href={resume}
          download='Megan_Hawkins'
          target='_blank'
          style={{ maxWidth: "250px", textAlign: "center" }}
        >
          Download My Resume Here!
        </Button>
        <br></br>
        <br></br>
        <div className='resHeader'>
          {/* <h1>MEGAN HAWKINS | SOFTWARE ENGINEER</h1> */}
        </div>
        <h2 className='purple'>SKILLS</h2>
        <div className='resSkills'>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>HTML</li>
          </ul>
          <ul>
            <li>React</li>
            <li>Express</li>
            <li>CSS</li>
          </ul>
          <ul>
            <li>Typescript</li>
            <li>MongoDB</li>
            <li>SASS</li>
          </ul>
          <ul>
            <li>Node</li>
            <li>PSQL</li>
            <li>REST API</li>
          </ul>
        </div>

        <h2 className='purple'>EXPERIENCE</h2>
        <div className='resExperience'>
          <div className='expHead'>
            <div className='expTitle'>
              <h3 className='expName'>General Assembly</h3>
              <h3 className='expLoc'>September 2022 – Present</h3>
            </div>
            <div className='expData'>
              <h4>Instructional Associate</h4>
            </div>
          </div>

          <ul className='expDesc'>
            <li>
              Worked closely with lead instructors to guide students through a
              rigorous 3-month course in learning JavaScript, React, Node,
              Express, Mongo, Python, Django, and other relevant materials
            </li>
            <li>
              Facilitated a dynamic and collaborative classroom community that
              welcomed various needs and learning styles, while encouraging
              student participation and student collaboration
            </li>
            <li>
              Improved leadership and mentorship skills, learning from veteran
              instructors and instructional coaches
            </li>
          </ul>
          <br></br>
          <div className='expHead'>
            <div className='expTitle'>
              <h3 className='expName'>General Assembly</h3>
              <h3 className='expLoc'>March 2022 – September 2022</h3>
            </div>
            <div className='expData'>
              <h4>Software Engineer Fellow</h4>
            </div>
          </div>

          <ul className='expDesc'>
            <li>
              Built fluency in full-stack development through an intensive
              program consisting of 420+ hours of instruction and hands-on
              practice, focusing on common best practices in object-oriented
              programming, MVC frameworks, and data modeling
            </li>
          </ul>
          <br></br>
          <div className='expHead'>
            <div className='expTitle'>
              <h3 className='expName'>Bronx Legal Services</h3>
              <h3 className='expLoc'>October 2020 – February 2022</h3>
            </div>
            <div className='expData'>
              <h4>Legal Advocate</h4>
            </div>
          </div>

          <ul className='expDesc'>
            <li>
              Worked in a fast-paced environment, overseeing legal
              representation of 30-40 clients in housing court or administrative
              proceedings
            </li>
            <li>
              Utilized creative strategies to successfully prevent evictions or
              find alternative solutions for clients
            </li>
            <li>
              Provided legal advice and counseling to tenants, as needed, and
              identified trends and recurrent issues for potential impact
              litigation
            </li>
          </ul>

          <br></br>
          <div className='expHead'>
            <div className='expTitle'>
              <h3 className='expName'>Texas Civil Rights Project</h3>
              <h3 className='expLoc'>May 2019 - August 2019</h3>
            </div>
            <div className='expData'>
              <h4>Law Clerk- Racial and Economic Justice Department</h4>
            </div>
          </div>

          <ul className='expDesc'>
            <li>
              Member of an impact-litigation team that provided legal
              representation in federal court, related to racial and economic
              justice at the border of Texas and Mexico
            </li>
            <li>
              Worked with 5+ different state organizations to plan and organize
              events and seminars for different communities in Texas and Mexico
            </li>
            <li>
              Researched law, drafted legal memos, drafted pleadings for federal
              litigation, and conducted on-site visits with clients and/or
              interested parties of ongoing litigation
            </li>
          </ul>
        </div>

        <div className='resEducation'>
          <h2 className='purple'>EDUCATION</h2>
          <div className='edCon'>
            <div className='edItem'>
              <p className='school'>General Assembly</p>
              <p className='cert'>Certificate in Full Stack Development</p>
            </div>
            <div className='edItem'>
              <p className='school'>New York Law School</p>
              <p className='cert'>Juris Doctor</p>
            </div>
            <div className='edItem'>
              <p className='school'>Dallas Baptist University</p>
              <p className='cert'>Bachelor of Business Studies</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Resume;
