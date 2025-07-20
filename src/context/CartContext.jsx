// CartContext.js
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, selectedSize) => {
    const exists = cartItems.find(
      (item) => item.id === product.id && item.size === selectedSize
    );

    if (exists) {
      return false; // Product with same size already exists
    }

    setCartItems((prev) => [
      ...prev,
      { ...product, size: selectedSize, quantity: 1 },
    ]);
    return true;
  };

  const updateQuantity = (id, newQuantity, size) => {
    if (newQuantity < 1) return;

    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => {
        if (item.id === id && item.size === size) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };


  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
