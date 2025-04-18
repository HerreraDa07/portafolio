import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/Portafolio.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Videojuego from "./rutas/Videojuego";
import Portafolio from "./rutas/Portafolio";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/portafolio/">
      <Routes>
        <Route path="/" element={<Portafolio />} />
        <Route path="/videojuego/:titulo" element={<Videojuego />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
