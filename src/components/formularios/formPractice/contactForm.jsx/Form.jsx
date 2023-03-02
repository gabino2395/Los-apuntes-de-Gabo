import React from "react";
import { useForm } from "./useForm";

const initialForm = {
  name: "",
  email: "",
  password: "",
};
//validaciones
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  return errors;
};
const Form = () => {
  // const [dataForm, setDataForm] = useState(initialForm);


  //custom hook para abstraer la logica 
  const {

    dataForm,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
    //tiene 2 parametros el objeto inicial y las validaciones
  } = useForm(initialForm, validationsForm);

  // const handlChange = (e) => {
  //   const { name, value } = e.target;
  //   setDataForm((prevForm) => {
  //     return {
  //       ...prevForm,
  //       [name]: value,
  //     };
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(dataForm);
  // };
  return (
    <div>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          margin: "0 auto",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="tu nombre aqui"
          //value a obtener
          value={dataForm.name}
          //se guardan los valores en estado
          onChange={handleChange}
          //se validan errores
          onBlur={handleBlur}
          required
        />
        {/* si hay errores los renderizamos en la UI */}
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="tu email"
          value={dataForm.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="contraseña"
          value={dataForm.password}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />

        <button>Submit</button>
      </form>
      {/* si hay loading lo renderizamos aqui */}
      {loading && "cargando..."}
      {/* renderizamos la respuesta final del form */}
      {response && "Los datos han sido enviados"}{" "}
    </div>
  );
};

export default Form;
