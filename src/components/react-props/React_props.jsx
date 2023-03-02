import React from 'react'
// componente padre le pasa las props en los atributos del tag con sus valores
const React_props = () => {
  
  return (
    <div><ChildComponent
     saludar="hola " nombre="pedro"/></div>

  )
}
// componente hijo recibe mediante props y utiliza libremente esos valores
function ChildComponent(props){
  return(
    <h2>{props.saludar} a {props.nombre}</h2>
  )
}
export default React_props