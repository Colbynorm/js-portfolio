import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Project from "../components/Project";

function ProjectsPage() {
  return (
    <Container>
      <div className="homework">
        <Row>
          <Col xs={6}>
            {" "}
            <p>ClassRoom Self-Check In</p>
            <a
              className="nav-link"
              id="project"
              href="https://github.com/kayla8693/classroom-self-checkin"
            >
              Project
            </a>
            <a
              className="nav-link"
              id="project"
              href="https://kayla8693.github.io/classroom-self-checkin"
            >
              Live Link
            </a>
          </Col>
          <Col xs={6}>
            {" "}
            <p>Quarantine Shopping App</p>
            <a
              className="nav-link"
              id="project"
              href="https://github.com/nwuerz/webstore"
            >
              Project
            </a>
            <a
              className="nav-link"
              id="project"
              href="https://doomsday-webstore.herokuapp.com/"
            >
              Live Link
            </a>
          </Col>
          <Col xs={6}>
            {" "}
            <Project
              title={"Quarantine Shopping App"}
              link="https://github.com/nwuerz/webstore"
            />
          </Col>
          <Col xs={6}>
            {" "}
            <Project />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ProjectsPage;
