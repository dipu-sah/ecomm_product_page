"use client";
import { CartContext } from "@/contexts/cartContext";
import { PRODUCTS } from "@/data/products";
import { AppMenu } from "@/layouts/AppMenu";
import { AppProductDetails } from "@/layouts/AppProductDetails";
// import { Metadata } from "next";
import { useContext } from "react";

// export const metadata: Metadata = {
//   title: "Frontend Mentor | E-commerce product page",
//   icons: "/images/favicon-32x32.png",
// };
export default function Home() {
  const cartContext = useContext(CartContext);
  return (
    <main className="font-kumbh-sans box-content px-32">
      <header className="border-b-1 border-b-dark-greyish-blue">
        <AppMenu></AppMenu>
      </header>
      {PRODUCTS.map((product, index) => {
        return (
          <AppProductDetails
            key={index}
            productDetails={product}
            initialQuantity={cartContext?.getProduct(product)?.quantity || 0}
            onAddToCart={(quantity: number) => {
              cartContext?.addOrUpdateProduct({ ...product, quantity });
            }}
          />
        );
      })}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Kumar</a>.
      </div>
    </main>
  );
}
