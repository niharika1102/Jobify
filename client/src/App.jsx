/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//setting up router
const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>home</h1>,
  },
  {
    path: '/about',
    element: <h1>about</h1>,
  },
]);

//returning the specified route based on the url asked for
const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
