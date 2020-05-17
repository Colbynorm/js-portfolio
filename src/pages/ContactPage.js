import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Contact(){
    return (
        <Container>
            <div className = "body">
                <Row>
                    <Col xs={12} md={8}>
                        <h4>Contact Me:</h4>
                        <p>Email: colbynorm41@gmail.com</p>
                        <p>Phone: 972-693-2708</p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Contact;