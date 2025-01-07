import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";

//Traditionally, backend and frontend are located on different servers when in development. Like, here frontend is on 5173 and backend is on 5100 server.
//So, when we send cookies, they come back to the same server i.e. the backend server. But, we want to access the cookies on frontend server.
//So, with the proxy, we kind of put the frontend and backend on the same server.
//Refer to vite.config.js for method explanation to setup proxy.
fetch("/api/v1/test")
  .then((res) => res.json())
  .then((data) => console.log(data));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
