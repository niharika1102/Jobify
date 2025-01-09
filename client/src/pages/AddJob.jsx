/* eslint-disable no-unused-vars */
import React from "react";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useNavigation, useOutletContext } from "react-router-dom";
import { FormRow } from "../components";

const AddJob = () => {
  // @ts-ignore
  const { user } = useOutletContext();
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";

  return (
    <Wrapper>
      <Form className="form" method="post">
        <h4 className="form-title">Add A Job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow type="text" name="jobLocation" labelText="job location" defaultValue={user.location}/>
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
