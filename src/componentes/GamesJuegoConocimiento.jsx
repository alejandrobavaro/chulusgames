import React, { useState } from "react";
import "../assets/scss/_03-Componentes/_GamesJuegoConocimiento.scss";

const GamesJuegoConocimiento = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [generoMusical, setGeneroMusical] = useState("");
  const [preguntaActual, setPreguntaActual] = useState(null);
  const [respuestaUsuario, setRespuestaUsuario] = useState("");
  const [intentos, setIntentos] = useState(0);
  const [preguntasRespuestas, setPreguntasRespuestas] = useState([]);
  const [juegoIniciado, setJuegoIniciado] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const iniciarJuego = () => {
    alert(`Hola ${nombreUsuario}, comencemos el juego`);
    let preguntas = [];
    switch (generoMusical.toLowerCase()) {
      case "reggaeton":
        preguntas = [
          { pregunta: "¿Quién canta la canción 'Despacito'?", respuesta: "Luis Fonsi" },
          { pregunta: "¿Qué país vio nacer el reggaeton?", respuesta: "Puerto Rico" },
          { pregunta: "¿Quién colabora con Shakira en la canción 'Chantaje'?", respuesta: "Maluma" }
        ];
        break;
      case "pop":
        preguntas = [
          { pregunta: "¿Quién es conocida como la 'Reina del Pop'?", respuesta: "Madonna" },
          { pregunta: "¿Quién es conocido como 'El Rey del Pop'?", respuesta: "Michael Jackson" },
          { pregunta: "¿Quién es el cantante de 'Shape of You'?", respuesta: "Ed Sheeran" }
        ];
        break;
      case "rock":
        preguntas = [
          { pregunta: "¿Cuál es el nombre de la banda liderada por Freddie Mercury?", respuesta: "Queen" },
          { pregunta: "¿Quién es el guitarrista principal de Guns N' Roses?", respuesta: "Slash" },
          { pregunta: "¿Qué banda lanzó 'The Dark Side of the Moon'?", respuesta: "Pink Floyd" }
        ];
        break;
      default:
        setMensaje("Elige un género válido: reggaeton, pop o rock.");
        return;
    }
    setPreguntasRespuestas(preguntas);
    setPreguntaActual(preguntas[0]);
    setJuegoIniciado(true);
  };

  const verificarRespuesta = () => {
    setIntentos(intentos + 1);
    if (respuestaUsuario.toLowerCase() === preguntaActual.respuesta.toLowerCase()) {
      setMensaje("¡Respuesta correcta!");
      const nuevasPreguntas = preguntasRespuestas.filter(p => p !== preguntaActual);
      if (nuevasPreguntas.length > 0) {
        setPreguntasRespuestas(nuevasPreguntas);
        setPreguntaActual(nuevasPreguntas[0]);
      } else {
        setMensaje(`¡Felicidades ${nombreUsuario}! Has completado el juego en ${intentos + 1} intentos.`);
        reiniciarJuego();
      }
    } else {
      setMensaje("Respuesta incorrecta. Inténtalo de nuevo.");
    }
    setRespuestaUsuario("");
  };

  const reiniciarJuego = () => {
    setIntentos(0);
    setJuegoIniciado(false);
    setNombreUsuario("");
    setGeneroMusical("");
    setPreguntaActual(null);
    setPreguntasRespuestas([]);
    setRespuestaUsuario("");
    setMensaje("");
  };

  return (
    <div className="juego-conocimiento-fondo">
      <div className="juego-conocimiento">
      {!juegoIniciado ? (
        <div>
          <h1>Juego de Conocimientos Musicales</h1>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
          <input
            type="text"
            placeholder="Elige un género (reggaeton, pop, rock)"
            value={generoMusical}
            onChange={(e) => setGeneroMusical(e.target.value)}
          />
          <button onClick={iniciarJuego}>Iniciar Juego</button>
        </div>
      ) : (
        <div>
          <h2>{preguntaActual.pregunta}</h2>
          <input
            type="text"
            placeholder="Tu respuesta"
            value={respuestaUsuario}
            onChange={(e) => setRespuestaUsuario(e.target.value)}
          />
          <button onClick={verificarRespuesta}>Enviar Respuesta</button>
          <p>{mensaje}</p>
        </div>
      )}
      {juegoIniciado && <button onClick={reiniciarJuego}>Reiniciar Juego</button>}
    </div>
    </div>
  );
};

export default GamesJuegoConocimiento;
