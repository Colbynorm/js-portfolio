import React from "react";

function Project(props) {
  return (
    <div>
      <p id={props.id}>{props.title}</p>
      {/* <a className="nav-link" id="homework" href={props.link}>
        Password Generator
      </a> */}
      <a className="nav-link" id={props.id} href={props.link}>
        Live Link To App
      </a>
    </div>
  );
}

export default Project;
