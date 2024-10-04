import React from "react";
import FooterGondraWorldDev from './FooterGondraWorldDev';
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <a href="#">
            <img
              className="footer-logo"
              src="../../img/05-img-costados-larga/4.png"
              alt="Logo Izquierda"
            />
          </a>
        </div>

        <div className="footer-column">
          <div className="social-links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram" /> Instagram
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-youtube" /> Youtube
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook" /> Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter" /> X (Twitter)
            </a>
          </div>
        </div>

        <div className="footer-column">
          <a href="#">
            <img
              className="footer-logo"
              src="../../img/05-img-costados-larga/4.png"
              alt="Logo Derecha"
            />
          </a>
        </div>
      </div>
      {/* <FooterGondraWorldDev /> */}
    </footer>
  );
}

export default Footer;
