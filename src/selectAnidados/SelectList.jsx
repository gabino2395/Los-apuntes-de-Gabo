import React from 'react'

import { useFetch2 } from "../hooks/customHooks/useFetch2";
// import Loader from "./Loader";
import Message from "../songs/Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch2(url);
  //console.log(data, error, loading);

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[title];
  //console.log(options);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && "cargando"}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectList