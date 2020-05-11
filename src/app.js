import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import "/app.css";
import Navbar from 'react-bootstrap/Navbar'

function App() {
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Colby Norman</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="https://github.com/Colbynorm">GitHub</Nav.Link>
      <Nav.Link href="./components/Resume.pdf">Resume</Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/colby-norman/">LinkedIn</Nav.Link>
    </Nav>
  </Navbar>
        // <Header 
        // leftComponent = {{ icon: 'Resume' }}
        // centerComponent = {{ icon: 'LinkedIn' }}
        // rightComponent = {{ icon: 'GitHub' }}
        // />
        <Container>
            <div className = "body">
                <Row>
                    <Col xs={6} md={4}>
                        <img scr = "./components/profilePic.jpg"></img>
                    </Col>
                    <Col xs={12} md={8}>
                        <h4>Contact Me:</h4>
                        <p>Email: colbynorm41@gmail.com</p>
                        <p>Phone: 972-693-2708</p>
                        <h5>Hi! My name is Colby Norman. I am a new up and coming full-stack web developer.
                            I am currently enrolled in a course at SMU in Dallas, TX, learning front-end and back-end web development.
                            Outside of class my hobbies include working out, reading, and enjoying Rock n Roll music.
                        </h5>
                    </Col>
                </Row>
            </div>
        </Container>
        <Container>
            <div className = "homework">
                <Row>
                    <Col xs={6}> <p>ClassRoom Self-Check In</p>
                        <a class="nav-link" id="project" href="https://github.com/kayla8693/classroom-self-checkin">Project</a>
                        <a class="nav-link" id="project" href="https://kayla8693.github.io/classroom-self-checkin">Live Link</a>
                    </Col>
                    <Col xs={6}> <p>Quarantine Shopping App</p>
                        <a class="nav-link" id="project" href="https://github.com/nwuerz/webstore">Project</a>
                        <a class="nav-link" id="project" href="https://doomsday-webstore.herokuapp.com/">Live Link</a>
                    </Col>
                </Row>
            </div>
        </Container>
              
           

    )
}
    