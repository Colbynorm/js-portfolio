import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import resume from "./Resume.pdf";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Colby Norman</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="https://github.com/Colbynorm">GitHub</Nav.Link>
        <Nav.Link href={resume}>Resume</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/colby-norman/">LinkedIn</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/homework">Homework</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
