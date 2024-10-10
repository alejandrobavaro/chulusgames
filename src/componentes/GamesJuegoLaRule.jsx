import React, { useState } from 'react';
import '../assets/scss/_03-Componentes/_GamesJuegoLaRule.scss';

const GamesJuegoLaRule = () => {
  const [puntos, setPuntos] = useState(100);
  const [resultado, setResultado] = useState('');

  const jugar = () => {
    if (puntos < 50) {
      alert('No tienes suficientes puntos para jugar.');
      return;
    }

    const numeroGanador = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    const intento = prompt('Adivina el número (entre 1 y 100):');

    if (intento === null) {
      return; // El usuario canceló el juego
    }

    const numeroUsuario = parseInt(intento);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
      alert('Por favor, ingresa un número válido entre 1 y 100.');
      return;
    }

    setPuntos((prevPuntos) => prevPuntos - 50);

    if (numeroUsuario === numeroGanador) {
      setPuntos((prevPuntos) => prevPuntos + 100);
      setResultado('¡Ganaste 100 puntos!');
    } else {
      setResultado(`Perdiste. El número correcto era ${numeroGanador}.`);
    }

    if (puntos < 50) {
      alert('Te has quedado sin puntos. El juego ha terminado.');
    }
  };

  return (
    <div className="games-la-rule-container">
      <h2>Juego La Rule</h2>
      <p>Puntos: <span className="games-puntos">{puntos}</span></p>
      <button onClick={jugar} className="games-jugar-btn">Jugar</button>
      <p className="games-resultado">{resultado}</p>
    </div>
  );
};

export default GamesJuegoLaRule;
