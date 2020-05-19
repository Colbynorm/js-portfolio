import React from "react";
import { Container } from "react-bootstrap";
//import {Navbar, Nav} from 'react-bootstrap';
import Project from "../components/Project";
import projectsArr from "../projects.json";

function ProjectPage(props) {
  return (
    <Container>
      {projectsArr.map((item) => (
        <Project
          key={item.id}
          title={item.title}
          link={item.link}
          id="project"
        />
      ))}
    </Container>
  );
}

export default ProjectPage;
