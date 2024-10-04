import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "../assets/scss/_03-Componentes/_GamesListado.scss";

const GamesListado = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("TODOS");

  useEffect(() => {
    fetch("/juegos1.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("Datos cargados:", data);
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) => {
    const matchesCategory =
      selectedCategory === "TODOS" || item.categoria === selectedCategory;
    const matchesSearchTerm =
      searchTerm === "" ||
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearchTerm;
  });

  const categories = [...new Set(data.map((item) => item.categoria))];

  return (
    <div className="data">
      <div className="search-filter-container">
        <div className="filters">
          <div className="category-buttons">
            <button
              className={selectedCategory === "TODOS" ? "selected" : ""}
              onClick={() => handleCategoryChange("TODOS")}
            >
              TODOS
            </button>

            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "selected" : ""}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar juegos..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {filteredData.length === 0 ? (
        <h4>No se encontraron juegos en la búsqueda. Verifique su selección.</h4>
      ) : (
        <div className="data-container">
          {filteredData.map((item) => (
            <div key={item.id} className="data-item">
              <h3>
                <Link to={`/juego/${item.nombre.toLowerCase()}`}>{item.nombre}</Link>
              </h3>
              <img src={item["imagen portada"]} className="game-image" alt={item.nombre} />
              <table>
                <tbody>
                  <tr>
                    <td><strong>Categoría:</strong></td>
                    <td>{item.categoria}</td>
                  </tr>
                  <tr>
                    <td><strong>Tipo:</strong></td>
                    <td>{item.tipo}</td>
                  </tr>
                  <tr>
                    <td><strong>Edad Permitida:</strong></td>
                    <td>{item["edad permitida"]}</td>
                  </tr>
                  <tr>
                    <td><strong>Precio:</strong></td>
                    <td>{item.precio}</td>
                  </tr>
                  <tr>
                    <td><strong>Seguidores:</strong></td>
                    <td>{item.seguidores}</td>
                  </tr>
                  <tr>
                    <td><strong>Comentarios:</strong></td>
                    <td>
                      <ul>
                        {item.comentarios.map((comentario, index) => (
                          <li key={index}>{comentario}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GamesListado;
