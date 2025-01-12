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

  //constructing an array of pages
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  console.log(pages);

  return (
    <Wrapper>
      <button className="btn prev-btn">
        <CgChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => (
          <button
            className={`btn page-btn ${pageNumber === currentPage && "active"}`}
            key={pageNumber}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button className="btn next-btn">
        next
        <CgChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
