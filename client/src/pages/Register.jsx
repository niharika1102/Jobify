/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

export const action = async (data) => {
  console.log(data);
  return null; //returning a value is compulsory. Without that, an error will be thrown.
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          name="name"
          labelText="First Name"
          defaultValue="John"
        />
        <FormRow
          type="text"
          name="lastname"
          labelText="Last Name"
          defaultValue="Doe"
        />
        <FormRow
          type="text"
          name="location"
          labelText="Location"
          defaultValue="Hyderabad"
        />
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
          defaultValue="johndoe"
        />
        <button type="submit" className="btn btn-block">
          Register
        </button>
        <p>
          Already a member?{" "}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
