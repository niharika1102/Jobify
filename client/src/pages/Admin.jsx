/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaSuitcaseRolling } from "react-icons/fa";
import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not authorized to access this page");
    return redirect("/dashboard");
  }
};
const Admin = () => {
  // @ts-ignore
  const { users, jobs } = useLoaderData();

  return (
    <Wrapper>
      <h2>Admin page</h2>
    </Wrapper>
  );
};

export default Admin;
