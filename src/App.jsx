import { useState } from 'react';
import { Tarjeta } from './componentes/Tarjeta/Tarjeta';
import { ModalProblema } from './componentes/ModalProblema/ModalProblema';
import './App.css';

function App() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [problemaActual, setProblemaActual] = useState(null);

  const abrirModal = (problema) => {
    setProblemaActual(problema);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setProblemaActual(null);
  };

  const listaEjercicios = [
    {
      Titulo: "Zoologicos",
      Imagen: "https://res.cloudinary.com/dpuixn4lq/image/upload/v1750611179/ZoologicosBoo_tdnwjm.png",
      Enunciado: `Se quiere diseñar una base de datos relacional que almacene información relativa a los zoológicos existentes en el mundo...`,
    },
    {
      Titulo: "Gabinete de Abogados",
      Imagen: "https://res.cloudinary.com/dpuixn4lq/image/upload/v1750611180/AabogadosBoo_udoknm.png",
      Enunciado: `Se quiere diseñar una base de datos relacional para almacenar información sobre los asuntos que lleva un gabinete de abogados...`,
    },
    {
      Titulo: "Sistema de Ventas",
      Imagen: "https://res.cloudinary.com/dpuixn4lq/image/upload/v1750611179/VentasBoo_cvymdy.png",
      Enunciado: `Le contratan para hacer una BD que permita apoyar la gestión de un sistema de ventas...`,
    },
    {
      Titulo: "Universidad Virtual Internacional (UVI)",
      Imagen: "https://res.cloudinary.com/dpuixn4lq/image/upload/v1750611180/UVIBoo_cgaaxt.png",
      Enunciado: `1. Estudiantes ... 8. Pagos`,
    },
  ];

  return (
    <>
      <div className="container py-4">
        <h1 className="text-center mb-4">BD React</h1>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
          {listaEjercicios.map((i, index) => (
            <div className="col" key={index}>
              <Tarjeta
                Titulo={i.Titulo}
                Imagen={i.Imagen}
                Enunciado={i.Enunciado}
                onVerMas={() => abrirModal(i)}
              />
            </div>
          ))}
        </div>
      </div>

      {problemaActual && (
        <ModalProblema
          show={mostrarModal}
          handleClose={cerrarModal}
          titulo={problemaActual.Titulo}
          enunciado={problemaActual.Enunciado}
          imagen={problemaActual.Imagen}
        />
      )}
    </>
  );
}

export default App;

