// src/components/KickoffJourney.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const KickoffJourney = () => {
  return (
    <Container className="my-5 section-background-dark">
      <Row>
        <Col md={8}>
          <h2>Kick off your ACCA Prep journey with IndigoLearn</h2>
          <p>Sign-up and get instant access to our FREE Courses.</p>
          <Button variant="danger">Register for a Free Trial</Button>
        </Col>
        <Col md={4}>
          <div className="border p-4">
            <h4>Aspiring to be an ACCA? Get in touch with us!</h4>
            <form>
              <div className="form-group">
                <label>Phone Number*</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Email ID*</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Current Qualification</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Interested In</label>
                <input type="text" className="form-control" />
              </div>
              <Button variant="primary" type="submit">Request Call Back</Button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default KickoffJourney;
