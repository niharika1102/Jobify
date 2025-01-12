/* eslint-disable no-unused-vars */
import React from "react";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, Link, useSubmit } from "react-router-dom";
import { FormRow, FormRowSelect } from ".";
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { useAllJobsContext } from "../pages/AllJobs";

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType, sort } = searchValues;

  const submit = useSubmit();

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            defaultValue={search}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="sort"
            list={["all", ...Object.values(JOB_SORT_BY)]}
            defaultValue={sort}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
          <Link to="/dashboard" className="btn form-btn delete-btn">
            Reset search values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
