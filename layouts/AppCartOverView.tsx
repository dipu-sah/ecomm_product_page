"use client";
import { iCartItem } from "@/@types/iCartItem";
import { CartContext } from "@/contexts/cartContext";
import { getEffectivePrice } from "@/helper/getEffectivePrice";
import Image from "next/image";
import { useContext } from "react";

export function AppCartOverview() {
  const cartContext = useContext(CartContext);
  const cartItems = [...(cartContext?.cartItems || [])];
  return (
    <div
      className="w-full z-20 rounded-md box-border"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h3 className="font-bold border-b-[1px] border-gray-400 box-border p-4">
        Cart
      </h3>
      <div className="cart-items flex flex-col box-border p-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 h-36 flex justify-center items-center">
            Your cart is empty.
          </p>
        ) : (
          <>
            {cartItems.map((cartItem, index) => (
              <AppCartItem
                key={index}
                cartItem={cartItem}
                onDelete={() => {
                  cartContext?.addOrUpdateProduct({
                    ...cartItem,
                    quantity: 0,
                  });
                }}
              />
            ))}
            <button className="bg-orange text-base box-border py-2 rounded-md cursor-pointer w-full">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
function AppCartItem({
  cartItem,
  onDelete = () => {},
}: {
  cartItem: iCartItem;
  onDelete?: () => void;
}) {
  return (
    <div className="flex flex-row w-full gap-2 box-content p-2">
      <Image
        src={cartItem.images[0] || ""}
        width={"40"}
        height={"40"}
        className="rounded-md  w-10 sm:w-16"
        alt=""
      />
      <div className=" flex flex-col min-w-20 grow text-gray-500 font-light text-xs sm:text-base">
        <p>{cartItem.title}</p>
        <p>
          <span className="text-base">
            $
            {getEffectivePrice({
              price: cartItem.price,
              discount: cartItem.discount,
            }).toFixed(2)}
            x {cartItem.quantity}{" "}
          </span>
          <strong className="font-bold text-black">
            $
            {(
              getEffectivePrice({
                price: cartItem.price,
                discount: cartItem.discount,
              }) * cartItem.quantity
            ).toFixed(2)}
          </strong>
        </p>
      </div>
      <button
        className="cursor-pointer"
        onClick={() => {
          onDelete();
        }}
      >
        <Image
          src={"/images/icon-delete.svg"}
          width={"12"}
          height={"12"}
          alt=""
        />
      </button>
    </div>
  );
}
