// @ts-nocheck
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Form, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post("/auth/login", data);
      queryClient.invalidateQueries();
      toast.success("User logged in successfully");
      return redirect("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
      return error;
    }
  };

const Login = () => {
  //Login dummy user for test drive
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const demoData = {
      email: "peter@gmail.com",
      password: "peter.smith@1102",
    };

    try {
      await customFetch.post("/auth/login", demoData);
      toast.success("Take a test drive");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Wrapper>
      <Form className="form" method="post">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" labelText="Email ID" />
        <FormRow type="password" name="password" labelText="Password" />
        <SubmitBtn />
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          Explore the App
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
