import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//------------ESTILOS--------------//
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/scss/_01-General/_BodyIndexApp.scss";
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

//-------------------GAMES------------------//
import GamesJuegoAdivina from "./componentes/GamesJuegoAdivina";
import GamesJuegoBingo from "./componentes/GamesJuegoBingo";
import GamesJuegoConocimiento from "./componentes/GamesJuegoConocimiento";
import GamesJuegoTetris from "./componentes/GamesJuegoTetris";
//---------------------------------------------------------//
import ApuestasCredito from "./componentes/ApuestasCredito"; // ApuestasCredito importado correctamente
import CasinoJuego1 from "./componentes/CasinoJuego1";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <AuthProvider>
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
              <Route path="/casino" element={<CasinoJuego1 />} />

              {/* Nuevas rutas para los juegos */}
              <Route path="/juego/adivina" element={<GamesJuegoAdivina />} />
              <Route path="/juego/bingo" element={<GamesJuegoBingo />} />
              <Route
                path="/juego/conocimiento"
                element={<GamesJuegoConocimiento />}
              />
              <Route path="/juego/tetris" element={<GamesJuegoTetris />} />
            </Routes>
          </div>
        </div>
        <hr className="border border-0 opacity-20" />
        <MainPublicidadSlider />
        <Footer />
        <MainWhatsappIcon />
      </Router>
    </AuthProvider>
  );
}

export default App;
