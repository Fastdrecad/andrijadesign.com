import React from "react";
import ReactDOM from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";

import "../src/assets/styles/style.scss";

import { SidebarProvider } from "./context/SidebarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </HelmetProvider>
  </React.StrictMode>
);
