// @ts-nocheck
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { Form, redirect, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { FormRow, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/DashboardFormPage";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();

    const file = formData.get("avatar");
    if (file && file.size > 500000) {
      toast.error("Image size is too large");
      return null;
    }

    try {
      await customFetch.patch("/users/update-user", formData);
      queryClient.invalidateQueries(["user"]);
      toast.success("Profile updated successfully");
      return redirect("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    }

    return null;
  };

const Profile = () => {
  // @ts-ignore
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;

  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="image" className="form-label">
              Select an image file (Max 0.5 MB)
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            defaultValue={lastName}
          />
          <FormRow type="email" name="email" defaultValue={email} />
          <FormRow type="text" name="location" defaultValue={location} />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
