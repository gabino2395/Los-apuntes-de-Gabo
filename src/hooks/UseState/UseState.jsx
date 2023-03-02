import React, { useState } from "react";

const UseState = () => {
  //inicializamos el estado , su initialstate es false
  const [state, setState] = useState(false);

  //hacemos una funcion toggle que revierta el estado del componente
  const toggle = () => {
    setState(!state);
  };
  return (
    <div>
      <p>como</p>
      <button onClick={toggle}>
        {/* hacemos un condicional para que al hacer click se revierta el estado */}
        {state ? "primer estado" : "segundo estado"}{" "}
      </button>
    </div>
  );
};

export default UseState;
