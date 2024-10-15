import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

//------------ESTILOS--------------//
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/scss/_01-General/_BodyIndexApp.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

//------------HEADER--------------//
import Header from "./componentes/Header";
//-----------HOME - MAIN-----------------//
import MainContent from "./componentes/MainContent";
import MainWhatsappIcon from "./componentes/MainWhatsappIcon";
import MainPublicidadSlider from "./componentes/MainPublicidadSlider";
//--------------FOOTER----------------//
import Footer from "./componentes/Footer";
//-----------CONTACTO-----------------//
import ContactoLogoRedes from "./componentes/ContactoLogoRedes";
import ContactoFormularioSlider from "./componentes/ContactoFormularioSlider";
//-----------DATA------------//
import GamesListado from "./componentes/GamesListado";
//-----------LOGIN-LOGOUT-REGISTRO-----------------//
import { AuthProvider } from "./componentes/SesionAuthContext";
import SesionRegister from "./componentes/SesionRegistrate";
import SesionLogout from "./componentes/SesionLogout";
import SesionLogin from "./componentes/SesionLogin";
//------------------TIENDA---------------------//
import Tienda from './componentes/Tienda';
import CarritoCompleto from './componentes/TiendaCarritoCompra';
import { OfertasProvider } from './componentes/TiendaOfertasContext';
//-------------------GAMES------------------//
import GamesJuegoAdivina from "./componentes/GamesJuegoAdivina";
import GamesJuegoBingo from "./componentes/GamesJuegoBingo";
import GamesJuegoConocimiento from "./componentes/GamesJuegoConocimiento";
import GamesJuegoTetris from "./componentes/GamesJuegoTetris";
//---------------------------------------------------------//
import ApuestasCredito from "./componentes/ApuestasCredito"; // ApuestasCredito importado correctamente
import CasinoListado from "./componentes/CasinoListado";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [productCart, setProductCart] = useState([]);
  const [musicCart, setMusicCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addProductToCart = (product) => {
    setProductCart([...productCart, product]);
  };

  const removeProductFromCart = (id) => {
    setProductCart(productCart.filter((product) => product.id !== id));
  };

  const addMusicToCart = (song) => {
    setMusicCart([...musicCart, song]);
  };

  const handlePagar = () => {
    Swal.fire({
      title: 'Proceso de Pago',
      text: 'Ahora vamos a realizar todo el proceso de tu pago. ¿Deseas continuar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'No, volver a la tienda',
    }).then((result) => {
      if (result.isConfirmed) {
        window.open('https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC', '_blank');
      }
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <AuthProvider>
      <OfertasProvider>
        <Router>
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

          <div className="main-content">
            <div className="content centered">
              <Routes>
                <Route path="/login" element={<SesionLogin />} />
                <Route path="/register" element={<SesionRegister />} />
                <Route path="/logout" element={<SesionLogout />} />
                <Route path="/" element={<MainContent />} />

                {/* Rutas accesibles sin autenticación */}
                <Route
                  path="/contacto"
                  element={
                    <>
                      <ContactoLogoRedes />
                      <ContactoFormularioSlider />
                    </>
                  }
                />
                <Route path="/game-listado" element={<GamesListado />} />
                <Route path="/apuestas" element={<ApuestasCredito />} />
                <Route path="/casino" element={<CasinoListado />} />

                {/* Nuevas rutas para los juegos */}
                <Route path="/juego/adivina" element={<GamesJuegoAdivina />} />
                <Route path="/juego/bingo" element={<GamesJuegoBingo />} />
                <Route path="/juego/conocimiento" element={<GamesJuegoConocimiento />} />
                <Route path="/juego/tetris" element={<GamesJuegoTetris />} />

                <Route path="/tienda" element={<Tienda 
                  setCart={setProductCart} 
                  cart={productCart} 
                  addToCart={addProductToCart} 
                  removeFromCart={removeProductFromCart} 
                  searchQuery={searchQuery} 
                  setSearchQuery={setSearchQuery} />} 
                />
                <Route path="/carrito" element={<CarritoCompleto 
                  cart={productCart} 
                  removeFromCart={removeProductFromCart} 
                  handlePagar={handlePagar} />} 
                />
              </Routes>
            </div>
          </div>
          <hr className="border border-0 opacity-20" />
          <MainPublicidadSlider />
          <Footer />
          <MainWhatsappIcon />
        </Router>
      </OfertasProvider>
    </AuthProvider>
  );
}

export default App;
