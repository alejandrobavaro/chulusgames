import React from "react";
import "../assets/scss/_03-Componentes/_CasinoJuego1.scss";

const CasinoJuego1 = () => {
  const games = [
    { name: "Blackjack Royale", img: "/img/casino-games/blackjack-royale.png" },
    { name: "Slots Deluxe", img: "/img/casino-games/slots-deluxe.png" },
    { name: "Poker Legends", img: "/img/casino-games/poker-legends.png" },
    { name: "Roulette Master", img: "/img/casino-games/roulette-master.png" },
    { name: "Baccarat Pro", img: "/img/casino-games/baccarat-pro.png" },
    { name: "Craps Supreme", img: "/img/casino-games/craps-supreme.png" },
    { name: "Lucky Keno", img: "/img/casino-games/lucky-keno.png" },
    { name: "Texas Hold'em", img: "/img/casino-games/texas-holdem.png" },
  ];

  return (
    <div className="casino-grid-container">
      <h2 className="casino-title">Featured Casino Games</h2>
      <div className="casino-grid">
        {games.map((game, index) => (
          <div key={index} className="casino-card">
            <img src={game.img} alt={game.name} className="casino-game-img" />
            <h3 className="casino-game-title">{game.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasinoJuego1;
