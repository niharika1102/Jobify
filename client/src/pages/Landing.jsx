// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking </span> app
          </h1>
          <p>
            Land your dream job with ease! Track applications, stay organized,
            and manage your profile - all in one sleek, hassle-free platform
            designed for job seekers.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Explore App
          </Link>
        </div>
        <img src={main} alt="landing-img" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
