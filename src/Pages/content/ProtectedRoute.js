import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import {
//   useQuery,
//   useMutation,
// } from "react-query";
// import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //   const [user, setUser] = useState("");
  //   const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("eshoptoken");
  const user = false;
  console.log("token");
  if (token) {
    return children;
  } else {
    return <Navigate to="/admin/login" />;
  }
};

export default ProtectedRoute;
