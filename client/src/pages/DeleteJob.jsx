/* eslint-disable no-unused-vars */
import React from "react";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const action =
  (queryClient) =>
  async ({ params }) => {
    try {
      await customFetch.delete(`/jobs/${params.id}`);
      queryClient.invalidateQueries(["jobs"]);
      toast.success("Job deleted successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    return redirect("/dashboard");
  };
