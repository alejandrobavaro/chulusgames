import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../assets/scss/_03-Componentes/_TiendaCarritoCompra.scss";
import "../assets/scss/_01-General/_SweetAlert.scss";

const TiendaCarritoCompra = ({ cart = [], removeFromCart, handlePagar, updateProductQuantity }) => {
  const [localCart, setLocalCart] = useState(cart);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const total = localCart.reduce((sum, product) => sum + (product.precio * (product.quantity || 1)), 0);

  const handleComprar = () => {
    handlePagar();
    Swal.fire({
      title: "Compra realizada!",
      text: "Tu compra ha sido procesada exitosamente.",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        popup: "sweetalert-popup",
        title: "sweetalert-title",
        confirmButton: "sweetalert-button",
      },
    });
  };

  const handleQuantityChange = (id, delta) => {
    setLocalCart(prevCart => {
      return prevCart.map(product => 
        product.id === id
          ? { ...product, quantity: Math.max(1, (product.quantity || 1) + delta) }
          : product
      );
    });
    updateProductQuantity(id, (localCart.find(product => product.id === id)?.quantity || 1) + delta);
  };

  return (
    <div className="carrito-container">
      <section className="titulo-container">
        <h1 className="titulo">
          <i className="bi bi-cart" /> CARRITO DE COMPRAS <i className="bi bi-cart" />
        </h1>
      </section>

      <div className="carrito-content">
        <div className="resumen-compra">
          <h3 className="resumen-titulo">RESUMEN DE LA COMPRA:</h3>
          <section className="pago-section">
            <h3 className="pago-titulo">
              <i className="bi bi-activity" /> REALIZA TU PAGO <i className="bi bi-activity" />
            </h3>
          </section>

          <div className="carrito-detalle">
            <div className="resumen-info">
              <p className="total-text">Total: ${total.toFixed(2)}</p>
              <p className="cantidad-text">Cantidad de Productos: {localCart.length}</p>
            </div>

            <ul className="producto-list">
              {localCart.map((product) => (
                <li key={product.id} className="producto-item">
                  <img
                    src={product.imagenes[0]}
                    alt={product.nombre}
                    className="producto-imagen"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/path/to/default/image.jpg"; 
                    }}
                  />
                  <div className="producto-info">
                    <span className="producto-nombre">{product.nombre}</span>
                    <div className="contenedorPrecioCantidad">
                      <span className="producto-precio">${(product.precio || 0).toFixed(2)}</span>
                      <div className="producto-cantidad">
                        <button
                          className="btn-quantity"
                          onClick={() => handleQuantityChange(product.id, -1)}
                        >
                          -
                        </button>
                        <span className="quantity-display">
                          {product.quantity || 1}
                        </span>
                        <button
                          className="btn-quantity"
                          onClick={() => handleQuantityChange(product.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="producto-descripcion">
                      {product.descripcion}
                    </div>
                  </div>
                  <button
                    className="btn-eliminar"
                    onClick={() => {
                      console.log("Eliminando producto con id:", product.id);
                      removeFromCart(product.id);
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </li>
              ))}
            </ul>

            <hr className="transparent-hr" />
            
            <section className="acciones">
              <button onClick={handleComprar} className="btn botonComprar">
                <h3 className="compra-text">
                  <i className="bi bi-shift-fill" /> Comprar
                </h3>
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiendaCarritoCompra;
