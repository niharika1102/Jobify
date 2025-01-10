/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  DashboardLayout,
  Register,
  Login,
  Error,
  AddJob,
  AllJobs,
  Stats,
  Profile,
  Admin,
  EditJob
} from "./pages"; //using named imports from index file

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as addJobAction } from "./pages/AddJob";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allJobsLoader } from "./pages/AllJobs";

// eslint-disable-next-line react-refresh/only-export-components
export const checkDefaultTheme = () => {
  //to use the preferred theme value from the local storage
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

//setting up router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />, // error handling

    children: [
      {
        // to setup the index page for parent route. i.e., this page will be displayed on the parent page
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,

        children: [
          {
            index: true,
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "add-job",
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
          },
        ],
      },
    ],
  },
]);

//returning the specified route based on the url asked for
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
