/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const e = useRouteError();
  console.log(e);

  return (
    <>
      <h1>Error page</h1>
      <Link to="/">Home --&gt;</Link>
    </>
  );
};

export default Error;
