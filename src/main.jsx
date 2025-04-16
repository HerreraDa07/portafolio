import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Portafolio from "./estructura/Portafolio";
import "./Portafolio.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Portafolio />
  </StrictMode>
);
