import React from "react";
import Modal from "react-modal";
import '../assets/scss/_03-Componentes/_TiendaModalInicio.scss'; // Verifica esta ruta

Modal.setAppElement("#root"); // Asegúrate de que el ID 'root' esté presente en tu index.html

const TiendaModalInicio = ({ showModal, closeModal }) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Promoción"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-wrapper">
        <button onClick={closeModal} className="modal-close">
          &times; {/* Carácter '×' para cerrar */}
        </button>
        <div className="modal-content">
          <h2>CHULUS GAMES!</h2>
          <p className="tituloImportante4">Aprovechá estos beneficios!</p>
          <div className="promo-list">
            <div className="promo-item detalleBlanco">Super Ofertas!</div>
            <div className="promo-item">Camisetas 20% Off!</div>
            <div className="promo-item">Envios a todo el país!</div>
            <div className="promo-item detalleBlanco">Super Ahorro!!</div>
          </div>
          <hr />
          <button onClick={closeModal} className="btn-primary">
            Ver más!
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TiendaModalInicio;
