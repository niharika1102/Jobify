// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import Navlinks from "./NavLinks";
import Wrapper from "../assets/wrappers/SmallSidebar";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        {/*If the showSidebar is true, i.e., the sidebar is not visible on the screen, then we display it. Else, we dont display it.*/}
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            {/*When we click on the X button in the sidebar, the value of the state changes to the reverse as pervious.*/}
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
