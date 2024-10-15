import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Importa el carrusel
import "../assets/scss/_03-Componentes/_CasinoListado.scss";

const CasinoListado = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/juegoscasino1.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error loading games:", error));
  }, []);

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="casino-grid-container">
      <h2 className="casino-title">Casino Games</h2>
      <div className="casino-grid">
        {games.map((game) => (
          <div key={game.id} className="casino-card">
            <h3 className="casino-game-title">{game.nombre}</h3>
            <img src={game["imagen portada"]} alt={game.nombre} className="casino-game-img" />
            <div className="game-info">
              <p>Tipo: {game.tipo}</p>
              <p>Categoría: {game.categoria}</p>
              <p>Edad Permitida: {game["edad permitida"]}</p>
              <p>Precio: {game.precio}</p>
              <p>Seguidores: {game.seguidores}</p>
            </div>
            <div className="carousel-container">
              <Slider {...settings}>
                {game["imagenes del juego"].map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`${game.nombre} - ${index + 1}`} className="carousel-image" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="comments-section">
              <h4>Comentarios:</h4>
              <ul>
                {game.comentarios.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasinoListado;
