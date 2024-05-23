// src/components/WhyChooseUs.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const WhyChooseUs = () => {
  return (
    <Container className="my-5 section-background-dark">
      <h2 className="text-center">Why Choose Us?</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Expert Faculty</Card.Title>
              <Card.Text>
                Our Faculty are subject matter experts with practical experience. They believe in #StudentFirst principle.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Complete Success Package</Card.Title>
              <Card.Text>
                Learning from Prime Destinations with Video lectures, Live classes, Doubt resolution forums, E-notes, Practice tests, Assignments, MCQs, Finance tests, Webinars.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Placements</Card.Title>
              <Card.Text>
                Receive training workshops, mock interviews and internship opportunities which will help you improve the final employment outcomes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
