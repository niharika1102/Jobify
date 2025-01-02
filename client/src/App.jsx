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
  Admin
} from "./pages"; //using named imports from index file

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
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,

        children: [
          {
            index: true,
            element: <AllJobs/>
          },
          {
            path: 'add-job',
            element: <AddJob/>
          },
          {
            path: 'stats',
            element: <Stats/>
          },
          {
            path: 'profile',
            element: <Profile/>
          },
          {
            path: 'admin',
            element: <Admin/>
          },
        ]
      },
    ],
  },
]);

//returning the specified route based on the url asked for
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
