import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_CasinoListado.scss";

const CasinoListado = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/juegoscasino1.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error loading games:", error));
  }, []);

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
              <p>{game.tipo} | {game.categoria}</p>
            </div>
            <Slider {...settings}>
              {game["imagenes del juego"].map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`${game.nombre} - ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
            <div className="comments-section">
              <ul>
                {game.comentarios.slice(0, 2).map((comment, index) => (
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
