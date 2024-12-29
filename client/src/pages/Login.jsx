/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <Link to="/register">Register here</Link>
    </>
  );
};

export default Login;
