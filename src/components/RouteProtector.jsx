import React, { useContext } from "react";
import { Authcontext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const RouteProtector = ({ children }) => {
  const { isLoading, isLoggedIn } = useContext(Authcontext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isLoggedIn === false) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RouteProtector;
