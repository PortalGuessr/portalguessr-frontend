/* 
================================================================================
Copyright (c) 2023 XnonXte
This project is released under MIT License.
GitHub repo: https://github.com/PortalGuessr/PortalGuessr-Frontend
================================================================================
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./styles/css/main.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

// ! Bootstrap's breakpoints. For development only!
// import "./styles/css/css-breakpoints.css";

const store = configureStore({
  reducer: {},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
