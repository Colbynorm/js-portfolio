import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

function Header(){
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Colby Norman</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="https://github.com/Colbynorm">GitHub</Nav.Link>
          <Nav.Link href="./components/Resume.pdf">Resume</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/colby-norman/">
            LinkedIn
          </Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default Header;