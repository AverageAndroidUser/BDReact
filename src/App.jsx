import { useState } from 'react';
import { Tarjeta } from './componentes/Tarjeta/Tarjeta';
import './App.css';

function App() {
  listaEjercicios = [
    {
      Titulo: "Zoologicos",
      Imagen: "https://res.cloudinary.com/dpuixn4lq/image/upload/v1750611179/ZoologicosBoo_tdnwjm.png",
      Enunciado: `Se quiere diseñar una base de datos relacional que almacene información relativa a los zoológicos existentes en el mundo, 
                  así como las especies animales que estos albergan. De cada zoológico se conoce el nombre, ciudad y país donde se encuentra, 
                  tamaño (en m2) y presupuesto anual. De cada especie animal se almacena el nombre vulgar y nombre científico, familia a la que pertenece y 
                  si se encuentra en peligro de extinción. Además, se debe guardar información sobre cada animal que los zoológicos poseen, 
                  como su numero de identificación, especie, sexo, año de nacimiento, país de origen y continente.`,
    },
    {
      Titulo: "Gabinete de Abogados",
      Imagen: "https://res.cloudinary.com/dpuixn4lq/image/upload/v1750611180/AabogadosBoo_udoknm.png",
      Enunciado: `Se quiere diseñar una base de datos relacional para almacenar información sobre los asuntos que lleva un gabinete de abogados. 
                  Cada asunto tiene un número de expediente que lo identifica, y corresponde a un solo cliente. Del asunto se debe almacenar el periodo (fecha de inicio y fecha de archivo o finalización), su estado (en trámite, archivado, etc, …). 
                  Algunos asuntos son llevados por uno o varios abogados, de los que nos interesa también los datos personales.`,
    },
    {
      Titulo: "Sistema de Ventas",
      Imagen: "https://res.cloudinary.com/dpuixn4lq/image/upload/v1750611179/VentasBoo_cvymdy.png",
      Enunciado: `Le contratan para hacer una BD que permita apoyar la gestión de un sistema de ventas. La empresa necesita llevar un control de proveedores, clientes, productos y ventas.
                  Un proveedor tiene un RUT, nombre, dirección, teléfono y pagina web. Un cliente también tiene RUT, nombre, dirección, pero puede tener varios teléfonos de contacto. La dirección se entiende por calle, numero, comuna y ciudad.
                  Un producto tiene un id único, nombre, precio actual, stock y nombre del proveedor. Además, se organizan en categorías, y cada producto va solo en una categoría. Una categoría tiene id, nombre y descripción.
                  Por razones de contabilidad, se debe registrar la información de cada venta con un id, fecha, cliente, descuento y monto final. Además, se debe guardar el precio al momento de la venta, la cantidad vendida y el monto total por el producto.`,
    },
    {
      Titulo: "Universidad Virtual Internacional (UVI)",
      Imagen: "https://res.cloudinary.com/dpuixn4lq/image/upload/v1750611180/UVIBoo_cgaaxt.png",
      Enunciado: `1. Estudiantes
                  Cada estudiante tiene un número de identificación único, nombres, apellidos, correo institucional, fecha de nacimiento y país de residencia.
                  Un estudiante puede estar matriculado en varios programas académicos a lo largo de su vida.
                  2 Programas Académicos
                  Cada programa tiene un código único, nombre, nivel (pregrado, especialización, maestría, doctorado), y duración en semestres.
                  Un programa está conformado por varias asignaturas obligatorias y optativas.
                  3. Asignaturas
                  Cada asignatura tiene un código único, nombre, créditos y tipo (obligatoria u optativa).
                  Una asignatura puede ser parte de varios programas.
                  4. Profesores
                  Cada profesor tiene un número de identificación único, nombres, apellidos, correo institucional y área de especialidad.
                  Un profesor puede dictar varias asignaturas en distintos programas y semestres.
                  5. Semestres Académicos
                  Cada semestre tiene un código (por ejemplo, 2025-1), fecha de inicio y fecha de fin.
                  6. Grupos de Asignatura
                  Para cada asignatura en cada semestre se crean uno o varios grupos (por ejemplo, Grupo 01, Grupo 02).
                  Cada grupo tiene un profesor asignado y un horario.
                  7. Matrículas y Calificaciones
                  Los estudiantes se matriculan en grupos específicos de asignaturas para un semestre.
                  Cada matrícula tiene una calificación final (puede ser nula mientras está en curso).
                  8. Pagos
                  Cada estudiante debe realizar uno o varios pagos por semestre.
                  Cada pago tiene un número de recibo, fecha de pago, monto y estado (pendiente, pagado, vencido).`,
    },
  ];

  return (
    <>
      <div>
        <h1>BD React</h1>
        <div>
          <Tarjeta></Tarjeta>
        </div>
      </div>
    </>
  )
}

export default App
