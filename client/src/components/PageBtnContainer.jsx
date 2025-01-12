/* eslint-disable no-unused-vars */
import React from "react";
import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAllJobsContext } from "../pages/AllJobs";

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();
  return <Wrapper></Wrapper>;
};

export default PageBtnContainer;
