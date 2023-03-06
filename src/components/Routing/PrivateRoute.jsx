import React from "react";
import { Navigate, Route } from "react-router-dom";

let auth;
auth = null;
auth = true;
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <div>
      <Route {...rest}>{auth ? <Component /> : <Navigate to="/login" />}</Route>
    </div>
  );
};

export default PrivateRoute;
