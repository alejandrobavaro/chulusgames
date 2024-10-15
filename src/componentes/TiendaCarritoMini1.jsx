import React from 'react';
import '../assets/scss/_03-Componentes/_TiendaCarritoMini1.scss';

function TiendaCarritoMini1({ items, total }) {
  return (
    <div className="mini-carrito1">
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {items.slice(0, 3).map((item, index) => {
            
              const price = typeof item.precio === 'number' ? item.precio.toFixed(2) : '0.00';
              
              return (
                <li key={index}>
                  <img
                    src={item.imagen || 'path/to/default/image.jpg'}
                    alt={item.nombre || 'Producto'}
                    className="producto-imagen"
                  />
                  <span className="producto-nombre">{item.nombre || 'Nombre no disponible'}</span>
                  <span className="producto-precio">${price}</span>
                </li>
              );
            })}
          </ul>
          <p className="total-carrito">
            Total: ${typeof total === 'number' ? total.toFixed(2) : '0.00'}
          </p>
          <button className="btn-ver-mas">
            Ver más
          </button>
        </>
      )}
    </div>
  );
}

export default TiendaCarritoMini1;
