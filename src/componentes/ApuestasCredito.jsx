import React, { useState } from 'react';
import '../assets/scss/_03-Componentes/_ApuestasCredito.scss';
// Asegúrate de que la imagen esté en la carpeta correcta y que la ruta sea correcta.
import imagenInstrucciones from '/img/05-img-costados-larga/28.jpeg'; 

const ApuestasCredito = () => {
  const [creditos, setCreditos] = useState(0);
  const [apuesta, setApuesta] = useState(0);
  const [resultado, setResultado] = useState('');

  const solicitarCreditos = () => {
    setCreditos(creditos + 100); // Ejemplo: sumar 100 créditos al solicitar
    setResultado('Has recibido 100 créditos.');
  };

  const realizarApuesta = () => {
    if (apuesta <= 0 || apuesta > creditos) {
      setResultado('Debes apostar un monto válido.');
      return;
    }
    setCreditos(creditos - apuesta);
    // Aquí podrías agregar lógica para determinar el resultado de la apuesta
    const resultadoApuesta = Math.random() < 0.5; // Ejemplo: 50% de ganar
    if (resultadoApuesta) {
      setCreditos(creditos + apuesta * 2); // Doblar la apuesta
      setResultado(`¡Ganaste! Apostaste ${apuesta} créditos y ahora tienes ${creditos + apuesta * 2} créditos.`);
    } else {
      setResultado(`Perdiste ${apuesta} créditos. ¡Mejora tu suerte la próxima vez!`);
    }
    setApuesta(0); // Reinicia la apuesta
  };

  return (
    <div className="apuestas-container">
      <div className="contenido-apuestas">
        <h2>Apuestas con Créditos</h2>
        <div className="publicidad">
          <p>¡No te pierdas nuestras promociones!</p>
        </div>
        <div className="creditos-section">
          <p>Créditos disponibles: <span className="creditos">{creditos}</span></p>
          <button onClick={solicitarCreditos} className="solicitar-creditos-btn">Solicitar Créditos</button>
        </div>
        <div className="apuesta-section">
          <input
            type="number"
            value={apuesta}
            onChange={(e) => setApuesta(Number(e.target.value))}
            placeholder="Monto a apostar"
            className="apuesta-input"
          />
          <button onClick={realizarApuesta} className="realizar-apuesta-btn">Apostar</button>
        </div>
        <p className="resultado">{resultado}</p>

        <div className="carrusel-apuestas">
          <h3>Próximas Apuestas</h3>
          <div className="carrusel-item">Apuesta 1</div>
          <div className="carrusel-item">Apuesta 2</div>
          <div className="carrusel-item">Apuesta 3</div>
        </div>

        <div className="instrucciones-section">
          <h3>Instrucciones para Apostar</h3>
          <img src={imagenInstrucciones} alt="Instrucciones para Apostar" className="instrucciones-img" />
          <ul className="instrucciones-list">
            <li>1. Solicita créditos usando el botón.</li>
            <li>2. Ingresa el monto que deseas apostar.</li>
            <li>3. Haz clic en "Apostar" para participar.</li>
            <li>4. ¡Buena suerte!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApuestasCredito;
