import React from 'react'
import { Link } from 'react-router-dom'

const ReactTopics = () => {
  return (
    <div>
      <h2>Temas de react</h2>
      <ul>
        <li>
          <Link to="jsx" >JSX</Link>
        </li>
        <li>
          <Link to="props">PROPS</Link>
        </li>
        <li>
          <Link to="state">ESTATE</Link>
        </li>
        <li>
          <Link to="components">COMPONENTS</Link>
        </li>
      </ul>
    </div>
  )
}

export default ReactTopics