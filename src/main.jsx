import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ImageProvider } from "./context/ImageContext.jsx";
import "./index.css";

// This is the "root" of the whole app. Three wrappers, each with one job:
//   BrowserRouter  -> lets us use <Routes>/<Link>/<NavLink> anywhere below
//   ImageProvider  -> our custom Context provider, makes the image store
//                      available to any component that asks for it
//   App            -> the actual layout + page routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ImageProvider>
        <App />
      </ImageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
