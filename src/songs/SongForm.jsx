import React, { useState } from "react";
const initalForm = {
  artist: "",
  song: "",
};
const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initalForm);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!form.artist || !form.song){
      alert('datos incompletos')
      return
    }
    handleSearch(form)
    setForm(initalForm)
  }
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="artista"
          onChange={handleChange}
          value={form.artist}

        />
        <input
          type="text"
          name="song"
          placeholder="nombre de la cancion"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default SongForm;
