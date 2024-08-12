// src/component/AlertComponent.jsx
import React from "react";
import { Alert, Button } from "react-bootstrap";

const AlertComponent = () => {
  return (
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
  );
};

export default AlertComponent;
