"use client";
import { useState } from "react";
import { cartItems as initialCartItems } from "../data/cartData";

export const useCart = () => {
  const [cart, setCart] = useState(initialCartItems);
  const [savedItems, setSavedItems] = useState([]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const saveForLater = (id) => {
    const itemToSave = cart.find((item) => item.id === id);
    if (itemToSave) {
      setSavedItems((prev) => [...prev, itemToSave]);
      removeItem(id);
    }
  };

  const moveToCart = (id) => {
    const itemToMove = savedItems.find((item) => item.id === id);
    if (itemToMove) {
      setCart((prev) => [...prev, itemToMove]);
      setSavedItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cart,
    savedItems,
    updateQuantity,
    removeItem,
    saveForLater,
    moveToCart,
    clearCart,
    getSubtotal,
    getItemCount,
  };
};
