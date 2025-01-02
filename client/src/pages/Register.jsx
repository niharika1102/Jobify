/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
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
      </form>
    </Wrapper>
  );
};

export default Register;
