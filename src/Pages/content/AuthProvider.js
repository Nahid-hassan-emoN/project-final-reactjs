import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import {
//   useQuery,
//   useMutation,
// } from "react-query";
// import { Route, Redirect } from "react-router-dom";

const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState("");
  //   const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("eshopCustomerToken");
  const user = false;
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthProvider;
