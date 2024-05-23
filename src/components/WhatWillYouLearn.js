// src/components/WhatWillYouLearn.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const WhatWillYouLearn = () => {
  return (
    <Container className="my-5 section-background-dark">
      <h2 className="text-center">What will you Learn in ACCA?</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Header>Knowledge Level</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Business and Technology (BT)</li>
                  <li>Management Accounting (MA)</li>
                  <li>Financial Accounting (FA)</li>
                </ul>
                <p>3 papers</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Header>Skill Level</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Corporate and Business Law (LW)</li>
                  <li>Performance Management (PM)</li>
                  <li>Taxation (TX)</li>
                  <li>Financial Reporting (FR)</li>
                  <li>Audit and Assurance (AA)</li>
                  <li>Financial Management (FM)</li>
                </ul>
                <p>6 papers</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Header>Professional Level</Card.Header>
            <Card.Body>
              <Card.Text>
                <p>Compulsory</p>
                <ul>
                  <li>SBL - Strategic Business Leader</li>
                  <li>SBR - Strategic Business Reporting</li>
                </ul>
                <p>Two out of the following</p>
                <ul>
                  <li>Advanced Financial Management (AFM)</li>
                  <li>Advanced Performance Management (APM)</li>
                  <li>Advanced Taxation (ATX)</li>
                  <li>Advanced Audit and Assurance (AAA)</li>
                </ul>
                <p>4 papers</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatWillYouLearn;
