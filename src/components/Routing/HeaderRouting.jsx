import React from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
const HeaderRouting = () => {
  return (
    <div>
      <ol>
        <li>
          <span>Enlaces con LINK:</span>
          <Link to="/">home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>
        <li>
          <span>Enlaces con NavLINK:</span>

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            home
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            About
          </NavLink>
          <NavLink
            to="/Contact"
            // activeclassName="active"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Contact
          </NavLink>
          <NavLink
            to="/no-existe"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Error 404
          </NavLink>
        </li>
        <li>
          <span>Parámetros: </span>
          <Link to="/usuario/jhon">jhon</Link>
          <Link to="/usuario/mike">mike</Link>
        </li>
        <li>
          <span>Parámetros de consulta: </span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones: </span>
          <Link to="/acerca">acerca</Link>
          <Link to="/contacto">contacto </Link>
        </li>
        <li>
          <span>Rutas anidadas: </span>
          <Link to="/reactTopics">React topics</Link>
        </li>
        <li>
          <span>Rutas Privadas: </span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </div>
  );
};

export default HeaderRouting;
