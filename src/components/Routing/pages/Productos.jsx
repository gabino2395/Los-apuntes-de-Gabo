import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Productos = () => {
  
  //usamos el hook useLocation para saber en que endpoint estamos
  let { search } = useLocation();
  //le pasamos por parametro a seacrh de useLocation a los parametros de la URL
  let query = new URLSearchParams(search);
  //iniciamos un limite ficticio de 20
  const limit = 20;
  //variable start que enpieza en inicio o 1 por defecto
  let start = parseInt(query.get("inicio")) || 1;
  //variable end que enpieza en fin o 20 por defecto

  let end = parseInt(query.get("fin")) || limit;
  //usamos este hook para poder navegar a un endpoint o ruta de forma programatica
  let navigate = useNavigate();
  const handlePrev = (e) => {
    navigate({ search: `?inicio=${start - limit}&fin=${end - limit}` });
    if (start > 0) {
    }
  };
  const handleNext = (e) => {
    navigate({ search: `?inicio=${start + limit}&fin=${end + limit}` });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > limit && <button onClick={handlePrev}>Atras</button>}{" "}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Productos;
