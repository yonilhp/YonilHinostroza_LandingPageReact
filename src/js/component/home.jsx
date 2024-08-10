import React from "react";
import { Navbar, Nav, Alert, Button } from "react-bootstrap";
import CardComponent from "./CardComponent"; // Asegúrate de ajustar la ruta si es necesario

const Home = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <div className="container ">
          <Navbar.Brand className="text-light">Start Bootstrap</Navbar.Brand>

          <div className="container">
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
        </div>
      </Navbar>
      <div className="container mt-4">
        <Alert variant="primary" className="text-start">
          <h1 className="text-dark">A Warm Welcome!</h1>
          <p className="text-dark">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </p>
          <Button variant="primary">Call to action!</Button>
        </Alert>
        <div className="d-flex flex-wrap">
          <CardComponent
            imageSrc="https://via.placeholder.com/150"
            title="Card Title 1"
            description="This is a short description for card 1."
          />
          <CardComponent
            imageSrc="https://via.placeholder.com/150"
            title="Card Title 2"
            description="This is a short description for card 2."
          />
          <CardComponent
            imageSrc="https://via.placeholder.com/150"
            title="Card Title 3"
            description="This is a short description for card 2."
          />
          <CardComponent
            imageSrc="https://via.placeholder.com/150"
            title="Card Title 4"
            description="This is a short description for card 2."
          />
        </div>
      </div>
      {/* Aqui footer */}
      <footer className="bg-dark text-light text-center py-3 mt-4">
        <div className="container">
          <p className="mb-0">Copyright © Your Wesite 2024.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
