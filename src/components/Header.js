// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">IndigoLearn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Buy Courses</Nav.Link>
            <Nav.Link href="#">Buy Books</Nav.Link>
            <Nav.Link href="#">Programs</Nav.Link>
            <Nav.Link href="#">Free Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link href="#">Login/Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
