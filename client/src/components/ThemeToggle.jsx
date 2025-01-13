/* eslint-disable no-unused-vars */
import React from "react";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";
import { useDashboardContext } from "../pages/DashboardLayout";
import Wrapper from "../assets/wrappers/ThemeToggle";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <TbSunFilled className="toggle-icon" />
      ) : (
        <TbMoonFilled className="toggle-icon" />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
