import React from 'react'

export const ContenidoTarjeta = ({Imagen}) => {
  return (
    <div>
      <img
        src={Imagen}
        alt="Solución BD"
        className="img-fluid rounded"
        style={{ maxHeight: '200px', objectFit: 'contain' }}
      />
    </div>
  )
}
