/* 
================================================================================
Copyright (c) 2023 XnonXte
This project is released under MIT License.
GitHub repo: https://github.com/XnonXte/PortalGuessr-FullStack
================================================================================
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./styles/css/main.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

// ! Bootstrap's breakpoints. For development only!
// import "./styles/css/css-breakpoints.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
