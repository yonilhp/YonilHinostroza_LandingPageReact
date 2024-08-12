// src/component/NavbarComponent.jsx
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <div className="container">
        <Navbar.Brand className="text-light">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="mr-auto d-flex justify-content-end w-100">
            <Nav.Link href="#home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="text-light">
              About
            </Nav.Link>
            <Nav.Link href="#services" className="text-light">
              Services
            </Nav.Link>
            <Nav.Link href="#contact" className="text-light">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
