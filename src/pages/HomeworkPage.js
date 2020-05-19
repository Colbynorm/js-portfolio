import React from "react";
import Container from "react-bootstrap/Container";

function Homework(props) {
  return (
    <Container>
      <div>
        <p>{props.title}</p>
        <a className="nav-link" id="homework" href={props.link}>
          Note Taker
        </a>
        <a
          className="nav-link"
          id="homework"
          href="https://github.com/Colbynorm/note-taker"
        >
          Link To Code
        </a>
      </div>

      <div>
        <p>{props.title}</p>
        <a className="nav-link" id="homework" href={props.link}>
          Weather Dashboard
        </a>
        <a
          className="nav-link"
          id="homework"
          href="https://colbynorm.github.io/weather-dashboard/"
        >
          Live Link To App
        </a>
      </div>

      <div>
        <p>{props.title}</p>
        <a className="nav-link" id="homework" href={props.link}>
          Password Generator
        </a>
        <a
          className="nav-link"
          id="homework"
          href="https://colbynorm.github.io/password-generator/"
        >
          Live Link To App
        </a>
      </div>

      <div>
        <p>{props.title}</p>
        <a className="nav-link" id="homework" href={props.link}>
          Workout Tracker
        </a>
        <a
          className="nav-link"
          id="homework"
          href="https://github.com/Colbynorm/workout-tracker"
        >
          Link To Code
        </a>
      </div>
    </Container>
  );
}

export default Homework;
