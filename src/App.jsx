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
import { AuthProvider, useAuth } from "./componentes/SesionAuthContext";
import SesionRegister from "./componentes/SesionRegistrate";
import SesionLogout from "./componentes/SesionLogout";
import SesionLogin from "./componentes/SesionLogin";
//-----------OTROS--------------//
import ConsultasAyuda from "./componentes/ConsultasAyuda";

//-------------------GAMES------------------//
import GamesJuegoAdivina from "./componentes/GamesJuegoAdivina";
import GamesJuegoBingo from "./componentes/GamesJuegoBingo";
import GamesJuegoConocimiento from "./componentes/GamesJuegoConocimiento";
import GamesJuegoLaRule from "./componentes/GamesJuegoLaRule";
import GamesJuegoTetris from "./componentes/GamesJuegoTetris";
//---------------------------------------------------------//

const ProtectedRoute = ({ element, ...rest }) => {
  const { state } = useAuth();
  return state.isAuthenticated ? element : <Navigate to="/login" />;
};

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
        <hr className="border border-0 opacity-20" />
        <div className="main-content">
          <div className="content centered">
            <Routes>
              <Route path="/login" element={<SesionLogin />} />
              <Route path="/register" element={<SesionRegister />} />
              <Route path="/logout" element={<SesionLogout />} />
              <Route
                path="/"
                element={<ProtectedRoute element={<MainContent />} />}
              />
              <Route
                path="/contacto"
                element={
                  <ProtectedRoute
                    element={
                      <>
                        <ContactoLogoRedes />
                        <ContactoFormularioSlider />
                      </>
                    }
                  />
                }
              />
              <Route
                path="/game-listado"
                element={<ProtectedRoute element={<GamesListado />} />}
              />
              <Route
                path="/ayuda"
                element={<ProtectedRoute element={<ConsultasAyuda />} />}
              />

              {/* Nuevas rutas para los juegos */}
              <Route
                path="/juego/adivina"
                element={<ProtectedRoute element={<GamesJuegoAdivina />} />}
              />
              <Route
                path="/juego/bingo"
                element={<ProtectedRoute element={<GamesJuegoBingo />} />}
              />
              <Route
                path="/juego/conocimiento"
                element={
                  <ProtectedRoute element={<GamesJuegoConocimiento />} />
                }
              />
              <Route
                path="/juego/larule"
                element={<ProtectedRoute element={<GamesJuegoLaRule />} />}
              />
              <Route
                path="/juego/tetris"
                element={<ProtectedRoute element={<GamesJuegoTetris />} />}
              />

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