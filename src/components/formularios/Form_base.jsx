import React,{useState} from 'react'
// formularios no controlados
const Form_base = () => {
  const [formData, setFormData] = React.useState(
    {firstName: "", lastName: ""}
)

console.log(formData)

function handleChange(event) {
    setFormData(prevFormData => {
        return {
          //le pido que me actualize todo lo que habia antes
            ...prevFormData,
            //y que me agregue el value igualando el name que habia pasado en el form
            [event.target.name]: event.target.value
        }
    })
}
  return (
    <form>
        <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            //es importante que tenga un name de atributo
            name="firstName"
            value={formData.firstName}

        />
        <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}

        />
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </form>
)
}

export default Form_base