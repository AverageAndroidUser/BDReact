import React from 'react';
import { EncabezadoTarjeta } from '../EncabezadoTarjeta/EncabezadoTarjeta';
import { ContenidoTarjeta } from '../ContenidoTarjeta/ContenidoTarjeta';

export const Tarjeta = ({ Titulo, Imagen, onVerMas }) => {
  return (
    <div className="card h-100 shadow-lg rounded-4">
      <div className="card-header bg-secondary text-white text-center" style={{fontWeight: 'bold'}}>
        <EncabezadoTarjeta Titulo={Titulo} />
      </div>

      <div className="card-body text-center">
        <ContenidoTarjeta Imagen={Imagen} />
      </div>

      <div className="card-footer bg-white border-0 text-end">
        <button className="btn btn-outline-primary" onClick={onVerMas}>
          Ver más
        </button>
      </div>
    </div>
  );
};

