import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

function Project(props){
    return (
        <div>
          <p>{props.title}</p>
            <a
              className="nav-link"
              id="project"
              href={props.link}
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
        </div>
    )
}

export default Project;