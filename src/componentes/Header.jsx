import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./SesionAuthContext";

import { BsFillPersonPlusFill, BsBoxArrowRight, BsList } from "react-icons/bs";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const { state, dispatch } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const getFormattedDate = () => {
    const today = new Date();
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const formattedDate = today.toLocaleDateString("es-ES", options);
    const [weekday, dayMonthYear] = formattedDate.split(", ");
    return { weekday, dayMonthYear };
  };

  const { weekday, dayMonthYear } = getFormattedDate();

  return (
    <header className="header encabezado">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo-container">
            <img
              src="../../img/02-logos/logochulusgames1.png"
              alt="Logo"
              className="logoHeader"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <BsList className="menu-icon" onClick={handleToggleMobileMenu} />
          </Navbar.Toggle>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}
          >
            <Nav className="ml-auto navbar-nav">
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                INICIO
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/game-listado"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GAMES
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/casino"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CASINO
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/apuestas"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                APUESTAS
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/tienda"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                TIENDA
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/contacto"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACTO
              </Nav.Link>
            </Nav>

{/*             
              <Nav.Item className="dark-mode-toggle">
                <AppModoClaroOscuro
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                />
              </Nav.Item> */}

              <Nav.Item className="auth-buttons-container">
                {state.isAuthenticated ? (
                  <div className="auth-welcome-container">
                    <div className="auth-welcome">
                      <span>Hola,</span>
                      <span>{state.user.email.split("@")[0]}</span>
                    </div>
                    <Link
                      className="nav-linkHeader auth-link logout-link"
                      to="/logout"
                      onClick={() => {
                        dispatch({ type: "LOGOUT" });
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <BsBoxArrowRight className="auth-icon" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link className="nav-linkHeader auth-link" to="/login">
                      <BsFillPersonPlusFill className="auth-icon" />
                    </Link>
                              <Link className="nav-linkHeader auth-link" to="/register">
                
                    </Link>
                  </>
                )}
              </Nav.Item>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
