import React from "react";
import { Navbar, Nav, Alert, Button } from "react-bootstrap";
import CardComponent from "./CardComponent"; // Asegúrate de ajustar la ruta si es necesario
import NavbarComponent from "./NavbarComponent";
import AlertComponent from "./AlertComponent";
import FooterComponent from "./FooterComponent";

const Home = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <div className="container ">
          <Navbar.Brand className="text-light">Start Bootstrap</Navbar.Brand>

          <div className="container">
            <NavbarComponent/>
          </div>
        </div>
      </Navbar>
      <div className="container mt-4">
        <AlertComponent/>
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
      <FooterComponent/>
    </div>
  );
};

export default Home;
