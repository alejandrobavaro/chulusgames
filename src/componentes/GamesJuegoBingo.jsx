import React, { useState, useEffect } from "react";
import "../assets/scss/_03-Componentes/_GamesJuegoBingo.scss";

const GamesJuegoBingo = () => {
  const [puntos, setPuntos] = useState(100);
  const [puntosApuesta] = useState(50);
  const [cartonJugador, setCartonJugador] = useState([]);
  const [numerosGenerales, setNumerosGenerales] = useState([]);
  const [numeroLlamado, setNumeroLlamado] = useState(null);

  const generarNumero = () => Math.floor(Math.random() * 75) + 1;

  const generarCarton = () => {
    const carton = [];
    while (carton.length < 24) {
      const numero = generarNumero();
      if (!carton.includes(numero)) {
        carton.push({ num: numero, marcado: false });
      }
    }
    return carton;
  };

  const marcarNumero = (numero) => {
    const nuevoCarton = cartonJugador.map((item) =>
      item.num === numero ? { ...item, marcado: true } : item
    );
    setCartonJugador(nuevoCarton);
  };

  const llamarNumero = () => {
    const numerosRestantes = numerosGenerales.filter(
      (num) => !cartonJugador.some((n) => n.num === num && n.marcado)
    );

    if (numerosRestantes.length === 0) {
      Swal.fire({
        title: '¡Todos los números han sido llamados!',
        text: 'Juego terminado.',
        icon: 'info',
      });
      return;
    }

    const numeroAleatorio = Math.floor(Math.random() * numerosRestantes.length);
    const numero = numerosRestantes[numeroAleatorio];

    setNumeroLlamado(numero);
    marcarNumero(numero);

    const cartonCompleto = cartonJugador.every((n) => n.marcado);
    if (cartonCompleto) {
      const nuevosPuntos = puntos + 100;
      Swal.fire({
        title: '¡Bingo! Ganaste 100 puntos.',
        text: `Ahora tienes ${nuevosPuntos} puntos. ¿Deseas volver a jugar por ${puntosApuesta} puntos?`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          setPuntos(nuevosPuntos - puntosApuesta);
          reiniciarJuego();
        } else {
          Swal.fire({
            title: '¡Gracias por jugar!',
            text: 'Game Over',
            icon: 'info',
          });
        }
      });
    }
  };

  const reiniciarJuego = () => {
    setCartonJugador(generarCarton());
    setNumerosGenerales(Array.from({ length: 75 }, (_, i) => i + 1));
    setNumeroLlamado(null);
  };

  useEffect(() => {
    reiniciarJuego();
  }, []);

  return (
    <div className="bingo-main-container">
 

      <div className="bingo-number-called">
      <h1 className="bingo-title">Bingo</h1>
        {numeroLlamado ? `¡${numeroLlamado}!` : "#"}
      </div>

      <button className="bingo-call-number-button" onClick={llamarNumero}>
            Llamar Número
          </button>

      <div className="bingo-game-container">
        <div className="bingo-header">
          <h2 className="bingo-carton-title">Tu Cartón</h2>
       
        </div>
        <div className="bingo-board">
          {cartonJugador.map(({ num, marcado }) => (
            <div key={num} className={marcado ? "marked" : "unmarked"}>
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesJuegoBingo;
