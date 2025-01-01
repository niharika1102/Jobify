/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: blue;
  h2 {
    color: green;
  }
  div {
    color: pink;
    background: purple;
  }
`;

const Landing = () => {
  return (
    <Wrapper>
      <h2>Landing</h2>
      <div className="content">Hello user!! Welcome to jobify</div>
    </Wrapper>
  );
};

export default Landing;
