/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages"; //using named imports from index file

//setting up router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <h1>about</h1>,
  },
]);

//returning the specified route based on the url asked for
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
