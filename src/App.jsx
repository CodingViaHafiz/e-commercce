import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Product from "./components/Product.jsx";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart.jsx";


function App() {
  return (

    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>

    </div>
  );
}

export default App;
