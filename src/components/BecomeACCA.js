// src/components/BecomeACCA.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const BecomeACCA = () => {
  return (
    <Container className="my-5 section-background-light">
      <Row>
        <Col md={8}>
          <h2>Become ACCA in 18 months</h2>
          <p>Acquire globally recognized accountancy qualification. ACCA (also known as Global CA), and get placed in top MNCs & Big4s. Begin ACCA prep with 1FIN now.</p>
          <div className="d-flex">
            <div className="mr-4">
              <h4>Registered Users</h4>
              <p>340,000</p>
            </div>
            <div className="mr-4">
              <h4>Classes Enrolled</h4>
              <p>81,407</p>
            </div>
            <div className="mr-4">
              <h4>Video Content (hours)</h4>
              <p>2,098</p>
            </div>
            <div>
              <h4>Faculty & Experts</h4>
              <p>48</p>
            </div>
          </div>
          <Button variant="primary" className="mr-2">Download Brochure</Button>
          <Button variant="danger">View Sample Classes</Button>
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

export default BecomeACCA;
