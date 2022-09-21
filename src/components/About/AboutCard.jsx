import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Megan Hawkins! </span>
            I am originally from <span className="purple"> Texas</span>, but currently live in <span className="purple">New York City</span>.<br />
            <br />I am a junior, full-stack <span className="purple">software engineer</span> with a cirtificate in full-stack development from <span className="purple">General Assembly</span>. 
            <br />
            <br />
            Apart from coding, here are some other things I love!
          </p>
          <ul>
            <li className="about-activity">
            🏺  Pottery
            </li>
            <li className="about-activity">
            🎶 Kpop
            </li>
            <li className="about-activity">
            🐱 My two cats, Willow and Calcifer! 
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;