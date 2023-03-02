import React from 'react'
import useFetch from './useFetch'
const Custom = () => {
  let url='https://rickandmortyapi.com/api/character'
  let url2="https://pokeapi.co/api/v2/pokemon/"
  let api="https://rickandmortyapi.com/api/character"

  const{data,isPending,error}=useFetch(url2)
  return (
    <div>
      {/* <h2>{JSON.stringify(isPending)}</h2>
      <h2>{JSON.stringify(data.name)}</h2>
      <h2>{JSON.stringify(error)}</h2> */}

      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        <code style={{ wordBreak: "break-word" }}>{JSON.stringify(data.results[0].name)}</code>
      </pre>

    </div>

  )
}

export default Custom