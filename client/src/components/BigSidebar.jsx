/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { useDashboardContext } from "../pages/DashboardLayout";
import Wrapper from "../assets/wrappers/BigSidebar";

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar /> {/*isBigSidebar helps in showing the sidebar whenever we navigate to a new dashboard tab. By default, the sidebar stays hidden when we open a tab.*/}
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
