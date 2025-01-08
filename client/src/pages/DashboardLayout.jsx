/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { checkDefaultTheme } from "../App";

//setting up a context to pass values to components without passing it through the entire component tree
// @ts-ignore
const DashboardContext = createContext();

//setting up loader - to fetch the values before the component is rendered
export const loader = () => {
  return "hello hooman";
};

const DashboardLayout = () => {
  //global values - temp (just for testing)
  const user = { name: "john" }; //name of user for profile
  const [showSidebar, setShowSidebar] = useState(false); //to show or hide sidebar
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme); //to toggle betwenn light and dark theme

  const data = useLoaderData();
  console.log(data);
  

  //function to toggle dark theme
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme); //toggle method requires a class (here, dark-theme) whose properties/styles should be applied to the element. The 2nd parameter needed is a force (i.e., a variable) on change of whose value the styles/properties will be applied to the element
    // @ts-ignore
    localStorage.setItem("darkTheme", newDarkTheme); //to save the theme preference in the local storage
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
