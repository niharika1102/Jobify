/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";

//setting up a context to pass values to components without passing it through the entire component tree
// @ts-ignore
const DashboardContext = createContext();

const DashboardLayout = () => {
  //global values - temp (just for testing)
  const user = { name: "john" }; //name of user for profile
  const [showSidebar, setShowSidebar] = useState(false); //to show or hide sidebar
  const [isDarkTheme, setIsDarkTheme] = useState(false); //to toggle betwenn light and dark theme

  //function to toggle dark theme
  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };

  //function to show and hid sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);    
  };

  //function to logout user
  const logoutUser = async () => {
    console.log("logout user");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

//creating custom hook
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
