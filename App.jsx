import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Picker from "./components/Picker.jsx"; 
import Mexico from "./views/Mexico.jsx";
import Multitap from "./views/Multitap.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { BeerProvider } from "./context/BeerContext.jsx";
import "./App.css";

export default function App() {
  return (
    <Router>
      <CartProvider>
        <BeerProvider>
          <Routes>
            <Route path="/" element={<Picker />} />
            <Route path="/mexico" element={<Mexico />} />
            <Route path="/multitap" element={<Multitap />} />
          </Routes>
        </BeerProvider>
      </CartProvider>
    </Router>
  );
}