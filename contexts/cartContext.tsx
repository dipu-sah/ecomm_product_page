"use client";
import { iCartItem } from "@/@types/iCartItem";
import { iProduct } from "@/@types/iProduct";
import { createContext, ReactNode, useState } from "react";

interface CartContextType {
  cartItems: iCartItem[];
  addOrUpdateProduct: (product: iCartItem) => void;
  getProduct: (product: iProduct) => iCartItem | null;
  getAllCartItems: () => iCartItem[];
  totalCartItems: number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<iCartItem[]>([]);
  function addOrUpdateProduct(product: iCartItem) {
    const newCartItems = [...cartItems];
    const productIdx = newCartItems.findIndex((p) => product.id === p.id);
    const productDetails = {
      ...(newCartItems[productIdx] || {}),
      ...product,
    };
    if (productIdx >= 0) {
      newCartItems.splice(productIdx, 1);
    }
    if (productDetails.quantity > 0) {
      newCartItems.push(productDetails);
      setCartItems(newCartItems);
    }
    console.log({ newCartItems });
  }

  function getProduct(product: iProduct) {
    return cartItems.find((e) => e.id == product.id) || null;
  }
  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        getAllCartItems: () => [...cartItems],
        addOrUpdateProduct,
        getProduct,
        totalCartItems: cartItems.reduce(
          (acc, current) => acc + current.quantity,
          0
        ),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
