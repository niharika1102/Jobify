/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import { Link, useNavigation, Form, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("User logged in successfully");
    return redirect("/dashboard")
  } catch (error) {
    toast.error(error.response.data.message);
    return error;
  }
}

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form className="form" method="post">
        <Logo />
        <h4>Login</h4>
        <FormRow
          type="email"
          name="email"
          labelText="Email ID"
          defaultValue="johndoe@gmail.com"
        />
        <FormRow
          type="password"
          name="password"
          labelText="Password"
          defaultValue="johndoe123"
        />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "...Submitting" : "Submit"}
        </button>
        <button className="btn btn-block">Explore the App</button>
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
