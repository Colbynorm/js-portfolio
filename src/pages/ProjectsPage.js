import React from "react";
import { Container } from "react-bootstrap";
//import {Navbar, Nav} from 'react-bootstrap';

function Project(props){
    return (
      <Container>
        <div>
          <p>{props.title}</p>
            <a className="nav-link" id="project" href={props.link}>
              Quarantine Shopping App
            </a>
            <a className="nav-link" id="project" href="https://doomsday-webstore.herokuapp.com/">
              Live Link
            </a>
        </div>

        <div>
          <p>{props.title}</p>
          <a className="nav-link" id="project" href={props.link}>
            Classroom Self Check In</a>
            <a className="nav-link" id="project" href="https://kayla8693.github.io/classroom-self-checkin">
              Live Link
            </a>
        </div>

        <div>
          <p>{props.title}</p>
          <a className="nav-link" id="project" href={props.link}>
            Medical App</a>
            <a className="nav-link" id="project" href="https://github.com/marcustate/project-3">
              Live Link
            </a>
        </div>        
      </Container>
    )
}

export default Project;