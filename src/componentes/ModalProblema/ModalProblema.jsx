import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const ModalProblema = ({ show, handleClose, titulo, enunciado, imagen }) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{enunciado}</p>
        <img src={imagen} alt="Solución del problema" className="img-fluid rounded mt-3" />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
