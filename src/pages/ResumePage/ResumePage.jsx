import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Resume() {
  return (
      <Container fluid className="resume-section">
          <Button
            variant="primary"
            href="https://mhawkins28.github.io/Resume/"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >Check Out My Resume Here!</Button>
</Container>

      

  );
}

export default Resume;