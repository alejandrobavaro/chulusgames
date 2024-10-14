import React, { useState, useEffect } from "react";

import "../assets/scss/_03-Componentes/_GamesJuegoAdivina.scss";

const GamesJuegoAdivina = () => {
  const [numeroInput, setNumeroInput] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [intentos, setIntentos] = useState(0);
  const [puntos, setPuntos] = useState(100);
  const [numeroSecreto, setNumeroSecreto] = useState(Math.floor(Math.random() * 100) + 1);
  const [historialIntentos, setHistorialIntentos] = useState([]);
  const [tiempoRestante, setTiempoRestante] = useState(60); // Temporizador
  const [dificultad, setDificultad] = useState("normal"); // Niveles de dificultad

  useEffect(() => {
    // Temporizador de 60 segundos
    const timer = setInterval(() => {
      setTiempoRestante((prev) => prev - 1);
    }, 1000);

    if (tiempoRestante === 0) {
      Swal.fire({
        title: "¡Tiempo agotado!",
        text: `El número secreto era ${numeroSecreto}.`,
        icon: "error",
      });
      reiniciarJuego();
    }

    return () => clearInterval(timer);
  }, [tiempoRestante]);

  const adivinarNumero = () => {
    setIntentos((prev) => prev + 1);
    setHistorialIntentos([...historialIntentos, numeroInput]);
    
    if (parseInt(numeroInput) === numeroSecreto) {
      const mensajeFinal = intentos === 0 
        ? `¡Felicitaciones! Adivinaste el número en el primer intento. ¡Eres un genio!`
        : `¡Correcto! Adivinaste el número en ${intentos + 1} intentos. ¡Bien hecho!`;
      
      const nuevosPuntos = puntos - (intentos + 1) * 10;
      setPuntos(nuevosPuntos);
      setMensaje(`${mensajeFinal} Has ganado ${nuevosPuntos} puntos.`);
      
      Swal.fire({
        title: '¡Ganaste!',
        text: mensajeFinal,
        icon: 'success',
      });
      
      reiniciarJuego();
    } else if (parseInt(numeroInput) < numeroSecreto) {
      setMensaje(`El número es mayor que ${numeroInput}. Intenta nuevamente.`);
    } else {
      setMensaje(`El número es menor que ${numeroInput}. Intenta nuevamente.`);
    }
  };

  const reiniciarJuego = () => {
    setIntentos(0);
    setPuntos(100);
    setNumeroSecreto(Math.floor(Math.random() * 100) + 1);
    setNumeroInput("");
    setHistorialIntentos([]);
    setTiempoRestante(60);
  };

  const cambiarDificultad = (nivel) => {
    setDificultad(nivel);
    const maxNumero = nivel === "facil" ? 50 : nivel === "normal" ? 100 : 200;
    setNumeroSecreto(Math.floor(Math.random() * maxNumero) + 1);
  };

  return (
    <div className="juego-adivina-fondo">
      <div className="juego-adivina">
      <h1 className="titulo">
        <span className="retro-glow">Adivina el número</span>
      </h1>
      <div className="control-panel">
        <div className="info-container">
          <p className="intentos">Intentos: {intentos}</p>
          <p className="puntos">Puntos: {puntos}</p>
          <p className="tiempo-restante">Tiempo restante: {tiempoRestante}s</p>
        </div>
        <div className="input-container">
          <input
            className={`numero-input ${numeroInput < numeroSecreto ? "menor" : "mayor"}`}
            type="number"
            value={numeroInput}
            onChange={(e) => setNumeroInput(e.target.value)}
            placeholder="Introduce un número"
          />
          <button className="boton-adivinar" onClick={adivinarNumero}>
            Adivinar
          </button>
        </div>
        <div className="dificultad-container">
          <p>Nivel de dificultad:</p>
          <button onClick={() => cambiarDificultad("facil")}>Fácil</button>
          <button onClick={() => cambiarDificultad("normal")}>Normal</button>
          <button onClick={() => cambiarDificultad("dificil")}>Difícil</button>
        </div>
      </div>
      <div className="historial-container">
        <h3>Historial de intentos</h3>
        <ul>
          {historialIntentos.map((intento, index) => (
            <li key={index}>{intento}</li>
          ))}
        </ul>
      </div>
      <p className="mensaje">{mensaje}</p>
    </div>
    </div>
  );
};

export default GamesJuegoAdivina;
