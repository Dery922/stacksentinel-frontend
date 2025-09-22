// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
