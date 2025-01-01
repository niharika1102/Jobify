/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  font-size: 2.5rem;
  color: blue;
  background: pink;
  border: 4px black solid;
`;

const Landing = () => {
  return (
    <>
      <div>Landing</div>
      <StyledBtn>Hello world!!</StyledBtn>
    </>
  );
};

export default Landing;
