import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HeaderRouting from "./HeaderRouting";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Usuario from "./pages/Usuario";
import Productos from "./pages/Productos";
import ReactTopics from "./pages/ReactTopics";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
let auth;
auth = true;
auth = null;
const AppRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderRouting />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/Usuario/:username" element={<Usuario />} />
          <Route path="/productos" element={<Productos />} />
          {/* para redireccionar usamos navigate */}
          <Route path="/acerca"  element={ <> <Navigate to="/About" /> </> } />
          <Route path="/contacto"  element={ <> <Navigate to="/Contact" /> </> } />
          <Route path="/reactTopics" element={<ReactTopics/>}>
          {/* <Route path=":topic" element={<Topic />} /> */}
          </Route>

          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/dashboard" element={<PrivateRoute component={Dashboard}/>}/> */}
          <Route path="dashboard" element={auth? <Dashboard/>:<Navigate to="/login"/>}/>

</Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouting;
