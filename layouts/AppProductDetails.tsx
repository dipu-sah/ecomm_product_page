"use client";

import { iProduct } from "@/@types/iProduct";
import { AppQuantitySelectorButton } from "./AppQuantityButton";
import { AppAddToCartButton } from "./AppAddToCartButton";
import { AppProductImageGallery } from "./AppProductImageGallery";
import { useState } from "react";
import { getEffectivePrice } from "@/helper/getEffectivePrice";

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
  return (
    <section className="flex flex-row flex-wrap box-border  md:pt-8">
      <div className="w-full md:w-1/4 grow">
        <AppProductImageGallery imageURL={productDetails.images} />
      </div>
      <aside className="w-1/2 flex flex-col gap-6 box-border lg:px-28 lg:pt-24 p-4 md:px-12 text-gray-600 grow ">
        <h4 className="font-[600] uppercase">Sneaker Company</h4>
        <h3 className="text-3xl font-bold text-black">
          {productDetails.title}
        </h3>
        <article>{productDetails.description}</article>
        <div className="pricing-details">
          <label className="font-bold text-2xl gap-4 flex flex-row flex-wrap h-8 items-baseline">
            <span className="text-black">
              $
              {getEffectivePrice({
                price: productDetails.price,
                discount: productDetails.discount,
              }).toFixed(2)}
            </span>
            {productDetails.discount > 0 && (
              <span className="bg-black text-white text-base rounded-md box-border text-center px-2 flex justify-center items-center">
                {productDetails.discount}%
              </span>
            )}
          </label>
          {productDetails.discount > 0 && (
            <label className="line-through">
              ${productDetails.price.toFixed(2)}
            </label>
          )}
          <div className="flex flex-row flex-wrap gap-4 mt-8 box-border">
            <div className="grow">
              <AppQuantitySelectorButton
                currentQuantity={currentQuantity}
                quantityDecrease={quantityDecrease}
                quantityIncrease={quantityIncrease}
              />
            </div>
            <div className="w-1/2 grow">
              <AppAddToCartButton
                onClick={() => {
                  onAddToCart(currentQuantity);
                }}
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
