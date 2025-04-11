"use client";

import { iProduct } from "@/@types/iProduct";
import { AppQuantitySelectorButton } from "./AppQuantityButton";
import { AppAddToCartButton } from "./AppAddToCartButton";
import { AppProductImageGallery } from "./AppProductImageGallery";
import { useState } from "react";

export function AppProductDetails({
  productDetails,
  initialQuantity = 0,
  onAddToCart = () => {},
}: {
  productDetails: iProduct;
  initialQuantity?: number;
  onAddToCart?: (quantity: number) => void;
}) {
  const [currentQuantity, setCurrentQuantity] = useState(initialQuantity);
  function quantityIncrease() {
    setCurrentQuantity(currentQuantity + 1);
  }
  function quantityDecrease() {
    setCurrentQuantity(currentQuantity - 1);
  }
  function getDiscountedPrice() {
    return productDetails.price * (productDetails.discount / 100);
  }
  return (
    <section className="flex flex-row gap-10 box-content px-10">
      <div className="w-[30rem]">
        <AppProductImageGallery imageURL={productDetails.images} />
      </div>
      <aside className="flex flex-col gap-6 box-content pt-24 text-gray-600">
        <h4 className="font-[600] uppercase">Sneaker Company</h4>
        <h3 className="text-3xl font-bold text-black">
          {productDetails.title}
        </h3>
        <article>{productDetails.description}</article>
        <div className="pricing-details">
          <label className="font-bold text-2xl gap-5 flex flex-row flex-wrap">
            <span className="text-black">
              ${getDiscountedPrice().toFixed(2)}
            </span>
            {productDetails.discount > 0 && (
              <>
                <span className="bg-black text-white text-base rounded-md box-border p-[0.3rem] text-center">
                  {productDetails.discount}%
                </span>
                <label className="line-through">${productDetails.price}</label>
              </>
            )}
          </label>
          <div className="flex flex-row flex-wrap gap-4">
            <AppQuantitySelectorButton
              currentQuantity={currentQuantity}
              quantityDecrease={quantityDecrease}
              quantityIncrease={quantityIncrease}
            />
            <AppAddToCartButton
              onClick={() => {
                onAddToCart(currentQuantity);
              }}
            />
          </div>
        </div>
      </aside>
    </section>
  );
}
