import React from 'react'
import { EncabezadoTarjeta } from '../EncabezadoTarjeta/EncabezadoTarjeta';
import { ContenidoTarjeta } from '../ContenidoTarjeta/ContenidoTarjeta';
import { FooterTarjeta } from '../FooterTarjeta/FooterTarjeta';

export const Tarjeta = () => {
  return (
    <div>
      <EncabezadoTarjeta />
      <ContenidoTarjeta />
      <FooterTarjeta />
    </div>
  )
}
