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
            <Project
              title={"Classroom Self Check In"}
              link="https://kayla8693.github.io/classroom-self-checkin"
            />
          </Col>
          <Col xs={6}>
            {" "}
            <Project
              title={"Quarantine Shopping App"}
              link="https://github.com/nwuerz/webstore"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ProjectsPage;
