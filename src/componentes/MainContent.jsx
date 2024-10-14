import React from "react";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  const images = [
    "./img/04-img-banners/headcarrusel4.jpg", 
    "./img/04-img-banners/headcarrusel2.png",
    "./img/04-img-banners/headcarrusel5.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <main className="mainContent">
      {/* Sección del carrusel principal */}
      <div className="banner-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="banner-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Sección de Noticias y Artículos */}
      <div className="mainContentContainer">
        <section className="newsSection">
          <h2 className="h2Titulo">Novedades en el mundo de los juegos</h2>
          <div className="newsRow">
            <div className="gridItem newsItem">
              <div className="newsText">
                <h3 className="newsTitle">Nuevo juego de estrategia lanzado</h3>
                <p className="newsDescription">
                  Descubre el último juego de estrategia que está revolucionando el mundo del gaming. Con innovadoras mecánicas de juego y una historia inmersiva, este título promete ser el favorito entre los fanáticos de la estrategia.
                </p>
                <p className="newsDetails">
                  Fecha de lanzamiento: Octubre 2024 | Plataforma: PC y Consolas
                </p>
              </div>
              <img src="../../img/05-img-costados-larga/1.jpeg" alt="Noticia 1" />
            </div>

            <div className="gridItem newsItem">
              <div className="newsText">
                <h3 className="newsTitle">Actualización importante en tu juego favorito</h3>
                <p className="newsDescription">
                  La última actualización trae nuevas características y mejoras de rendimiento, optimizando la experiencia multijugador y añadiendo contenido exclusivo.
                </p>
                <p className="newsDetails">
                  Contenido nuevo: mapas, personajes y modos de juego. ¡No te lo pierdas!
                </p>
              </div>
              <img src="../../img/05-img-costados-larga/3.jpeg" alt="Noticia 2" />
            </div>

            <div className="gridItem newsItem">
              <div className="newsText">
                <h3 className="newsTitle">Evento de Esports en camino</h3>
                <p className="newsDescription">
                  Grandes torneos de gaming se aproximan este año, con premios millonarios para los ganadores. Equipos de todo el mundo competirán por la gloria.
                </p>
                <p className="newsDetails">
                  Sigue la cobertura en vivo y apoya a tus equipos favoritos.
                </p>
              </div>
              <img src="../../img/05-img-costados-larga/4.jpeg" alt="Noticia 3" />
            </div>
          </div>
        </section>

        {/* Sección de Publicidades */}
        <section className="adSection">
          <h2 className="h2Titulo">Publicidad</h2>
          <div className="adRow">
            <div className="gridItem adItem">
              <img src="../../img/05-img-costados-larga/5.jpeg" alt="Anuncio 1" />
              <p className="adDescription">¡Consigue descuentos en juegos! Hasta un 50% de descuento en los títulos más vendidos del año. Aprovecha la oferta ahora.</p>
            </div>

            <div className="gridItem adItem">
              <img src="../../img/05-img-costados-larga/6.jpeg" alt="Anuncio 2" />
              <p className="adDescription">Prueba nuestra nueva plataforma de juegos con gráficos impresionantes y una experiencia única en su clase.</p>
            </div>

            <div className="gridItem adItem">
              <img src="../../img/05-img-costados-larga/7.jpeg" alt="Anuncio 3" />
              <p className="adDescription">Ofertas especiales para nuevos jugadores. ¡Regístrate hoy y obtén recompensas exclusivas!</p>
            </div>
          </div>
        </section>

        {/* Sección de Torneos y Jugadores */}
        <section className="tournamentSection">
          <h2 className="h2Titulo">Torneos de Gaming y Jugadores</h2>
          <div className="tournamentRow">
            <div className="gridItem tournamentItem">
              <div className="tournamentText">
                <h3 className="tournamentTitle">Torneo Internacional de eSports</h3>
                <p className="tournamentDescription">
                  Los mejores equipos del mundo compiten por el gran premio en este evento de eSports. ¡No te lo pierdas!
                </p>
              </div>
              <img src="../../img/05-img-costados-larga/8.jpeg" alt="Torneo 1" />
            </div>

            <div className="gridItem tournamentItem">
              <div className="tournamentText">
                <h3 className="tournamentTitle">Perfil del Jugador: Alex Storm</h3>
                <p className="tournamentDescription">
                  Alex, conocido como Storm, ha dominado los torneos de FPS este año. Conoce su historia y cómo se ha convertido en una leyenda del gaming.
                </p>
              </div>
              <img src="../../img/05-img-costados-larga/9.jpeg" alt="Jugador 1" />
            </div>

            <div className="gridItem tournamentItem">
              <div className="tournamentText">
                <h3 className="tournamentTitle">Campeonato de Estrategia 2024</h3>
                <p className="tournamentDescription">
                  Los jugadores más estratégicos del mundo competirán por el título. ¡Prepárate para una batalla épica de cerebros!
                </p>
              </div>
              <img src="../../img/05-img-costados-larga/10.jpeg" alt="Torneo 2" />
            </div>
          </div>
        </section>

        {/* Sección de Casino y Apuestas */}
        <section className="casinoSection">
          <h2 className="h2Titulo">Juegos de Casino y Apuestas Deportivas</h2>
          <div className="casinoRow">
            <div className="gridItem casinoItem">
              <img src="../../img/05-img-costados-larga/11.jpeg" alt="Casino 1" />
              <div className="casinoText">
                <h3 className="casinoTitle">Nuevas tragamonedas online</h3>
                <p className="casinoDescription">
                  Descubre las tragamonedas más emocionantes del momento. Con premios increíbles y un diseño visual alucinante.
                </p>
              </div>
            </div>

            <div className="gridItem casinoItem">
              <img src="../../img/05-img-costados-larga/12.jpeg" alt="Casino 2" />
              <div className="casinoText">
                <h3 className="casinoTitle">Apuestas en vivo para la final de fútbol</h3>
                <p className="casinoDescription">
                  Coloca tus apuestas en el partido del año. ¡Gana grandes premios mientras disfrutas del fútbol en vivo!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Suscripción */}
        <section className="subscriptionSection">
          <h2 className="h2Titulo">Suscríbete a nuestras novedades</h2>
          <div className="subscriptionItem">
            <p className="subscriptionText">
              Mantente informado sobre las últimas novedades del mundo gaming, apuestas y mucho más. ¡Suscríbete ahora y no te pierdas nada!
            </p>
            <button className="botonEnviar">Suscribirse</button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainContent;
