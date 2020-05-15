import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Contact(){
    return (
        <Container>
            <div className = "body">
                <Row>
                    <Col xs={6} md={4}>
                        <img scr = "../components/profilePic.jpg"></img>
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
    )
}

export default Contact;