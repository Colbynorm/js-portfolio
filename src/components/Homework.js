import React from "react";

function Homework(props) {
  return (
    <div>
      <p id={props.id}>{props.title}</p>
      <a className="nav-link" id={props.id} href={props.link}>
        Link To App
      </a>
    </div>
  );
}

export default Homework;