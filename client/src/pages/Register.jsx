/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import customFetch from "../utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data); //this line of code tells us the type of request and its URL. The data parameter is the data that we need to send to the backend server. So, this data is stored in the database when the request is made.
    return redirect("/login"); //returning a value is compulsory. Without that, an error will be thrown.
  } catch (error) {
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === "submitting"; //checking the state of submit button

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
          name="lastName"
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
          defaultValue="johndoe123"
        />
          {/*the disbaled property is set to isSubmitting. This means when the form will be in the submitting state, the button will be disabled.*/}
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
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
