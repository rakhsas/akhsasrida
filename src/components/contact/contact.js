import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <Container fluid className="contact-section">
            <Container>
                <h1 className="project-heading">
                    Contact <strong className="green">Me</strong>
                </h1>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="formGroupMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </Container>
    );
}

export default Contact;