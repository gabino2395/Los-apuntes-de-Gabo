import React,{useEffect,useState} from 'react'

const UseEffect = () => {
//inicializamos nuestro estado para los personajes
  const[chacarters,setChacarters]=useState([])

  //hacemos una funcion que traiga la data de la api
  const fechtCaracters=()=>{
    fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then(res=>res.json())
    .then(data=>{
      setChacarters(data.results)
      console.log(data.results)
    })
    
  }
  // en nuestro useEffecto especificamos la funcion que queremos que haga efecto
  useEffect(()=>{
fechtCaracters
  },[])
  return (
    <>
    {/* llamamos a la funcion */}
    <button onClick={fechtCaracters}>click please</button>
    <ul>
      {/* mapeamos los personajes */}
      {chacarters.map(chacarter=>(
        <li key={chacarter.id}>
          <p>{chacarter.name}</p>
          </li>
      ))}
    </ul>
    </>
  )
}

export default UseEffect