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
    
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  //constructing an array of pages
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });


  //changing the pages when clicked on
  const handlePageChange = (pageNum) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNum);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
      <button
        className="btn prev-btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages; //if the current page is 1, we dont want to go back to page 0. We will go back to the last page instead.
          handlePageChange(prevPage);
        }}
      >
        <CgChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => (
          <button
            className={`btn page-btn ${pageNumber === currentPage && "active"}`}
            key={pageNumber}
            onClick={() => {
              handlePageChange(pageNumber);
            }}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="btn next-btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        <CgChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
