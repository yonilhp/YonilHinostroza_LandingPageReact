import React from "react";
import { Card, Button } from "react-bootstrap";

// Componente Card reutilizable
const CardComponent = ({ imageSrc, title, description }) => {
  return (
    <Card style={{ width: "16rem", height: "auto", margin: "10px" }}>
      <Card.Img
        variant="top"
        src={imageSrc}
        style={{ height: "150px", objectFit: "cover" }} // Imagen de tamaño fijo
      />
      <Card.Body className="p-3">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-light text-center py-2">
        <div className="text-center">
          <Button variant="primary">Find Out More</Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CardComponent;
