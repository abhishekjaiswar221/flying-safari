import "@fontsource/pacifico";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../public/fonts/optima/style.css";
import App from "./App.jsx";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
