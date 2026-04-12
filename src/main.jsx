import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Weddings from "./pages/Weddings.jsx";
import Potraits from "./pages/Potraits.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="category/wedding" element={<Weddings />} />
      <Route path="category/potrait" element={<Potraits />} />
    </Routes>
  </BrowserRouter>,
);
