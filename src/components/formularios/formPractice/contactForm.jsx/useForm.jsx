import React, { useState } from "react";
import { Http } from "./Http";

export const useForm = (initialForm, validateForm) => {
  // estado del form que arranca con un objeto de inputs vacios
  const [dataForm, setDataForm] = useState(initialForm);
  //estado de errores  que sera al comienzo un objeto vacio
  const [errors, setErrors] = useState({});
  //estado de loading
  const [loading, setLoading] = useState(false);
  //estado de respuesta
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    //desesctructuramos el evento target
    const { name, value } = e.target;
    setDataForm({
      //al estado del form le agregamos todo lo que habia antes + el value del target
      ...dataForm,
      [name]: value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    //validamos errores
    setErrors(validateForm(dataForm));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(dataForm));
//chequeamos que la longitud del objeto de errores sea igual a cero
    if (Object.keys(errors).length === 0) {
      alert("Enviando Formulario");
      setLoading(true);
      //helper
      Http()
        .post("https://formsubmit.co/ajax/gjmendezacosta@gmail.com", {
          body: dataForm,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setDataForm(initialForm);
          setTimeout(() => setResponse(false), 5000);
        });
    } else {
      return;
    }
  };
  return {
    dataForm,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
  };
};
