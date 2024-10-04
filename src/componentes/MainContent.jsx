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
    dots: true, // Muestra puntos de navegación
    infinite: true, // Hacer que sea infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Número de slides a mostrar
    slidesToScroll: 1, // Número de slides por transición
    autoplay: true, // Activar autoplay
    autoplaySpeed: 3000, // Tiempo de cada slide (en milisegundos)
    fade: true, // Efecto de fade en la transición
  };

  return (
    <main className="mainContent">
      <div className="row container-fluid">
        <div className="column objetoCentrado1">
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
      </div>
    </main>
  );
}

export default MainContent;
