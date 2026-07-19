import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

/**
 * Entry point. Wrapped in BrowserRouter so the app is router-ready —
 * add <Routes>/<Route> in App.jsx if you later split into multiple pages.
 * The current portfolio is a single page using smooth-scroll anchors.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
