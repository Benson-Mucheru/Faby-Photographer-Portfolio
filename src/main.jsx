import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Weddings from "./pages/Weddings.jsx";
import Portraits from "./pages/Portraits.jsx";
import Event from "./pages/Event.jsx";
import Street from "./pages/Street.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="category/wedding" element={<Weddings />} />
      <Route path="category/potrait" element={<Portraits />} />
      <Route path="category/event" element={<Event />} />
      <Route path="category/street" element={<Street />} />
    </Routes>
  </BrowserRouter>,
);
