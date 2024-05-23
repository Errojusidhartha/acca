// src/components/Eligibility.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Eligibility = () => {
  return (
    <Container className="my-5 section-background-light">
        <h2 className="text-center">ACCA – Eligibility</h2>
        <p>Check your eligibility for the ACCA qualification. Start preparing today with our specialized courses and resources.</p>
      <Row className="text-center">
        <Col md={3}>
          <h5>Levels</h5>
          <p>Three (13 papers)</p>
        </Col>
        <Col md={3}>
          <h5>Duration</h5>
          <p>6-30 months</p>
        </Col>
        <Col md={3}>
          <h5>Exams</h5>
          <p>Quarterly (Online)</p>
        </Col>
        <Col md={3}>
          <h5>Exemptions</h5>
          <p>Up to 9 papers</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Eligibility;
