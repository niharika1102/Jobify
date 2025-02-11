/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Outlet,
  redirect,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar, Loading } from "../components";
import { checkDefaultTheme } from "../App";
import customFetch from "../utils/customFetch";

//setting up a context to pass values to components without passing it through the entire component tree
// @ts-ignore
const DashboardContext = createContext();

const userQuery = {
  queryKey: ["user"],
  queryFn: async () => {
    const { data } = await customFetch("/users/current-user");
    return data;
  },
};

//setting up loader - to fetch the values before the component is rendered
export const loader = (queryClient) => async () => {
  //we take the data from the get request made to users/current-user and return the data. In case of any issues, we logout the user from the website by redirecting them to the base route ("/").
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect("/");
  }
};

const DashboardLayout = ({ queryClient }) => {
  // @ts-ignore
  const { user } = useQuery(userQuery).data; //user info for profile
  const [showSidebar, setShowSidebar] = useState(false); //to show or hide sidebar
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme); //to toggle betwenn light and dark theme
  const [isAuthError, setIsAuthError] = useState(false);

  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  const navigate = useNavigate();

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
    navigate("/"); //navigate to base route
    await customFetch.get("/auth/logout"); //make request to logout route
    queryClient.invalidateQueries();
    toast.success("User logged out successfully");
  };

  //axios interceptors
  customFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
  }, [isAuthError]);

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
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
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
