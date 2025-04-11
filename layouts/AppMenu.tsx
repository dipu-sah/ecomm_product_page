"use client";
import Image from "next/image";
import Link from "next/link";
import { AppCartOverview } from "./AppCartOverView";
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/cartContext";

export function AppMenu() {
  const [isShowingCartOverView, setIsShowingCartOverView] =
    useState<boolean>(false);
  const cartContext = useContext(CartContext);
  return (
    <menu className="flex flex-row list-none h-24 gap-3 items-center">
      <li className="pr-16">
        <Link href="/">
          <Image src={"/logo.svg"} alt="" width={200} height={30}></Image>
        </Link>
      </li>
      <li className="h-full items-center justify-center flex cursor-pointer hover:border-b-4 border-amber-500 w-16">
        <Link href={"collections"}>Collections</Link>
      </li>
      <li className="h-full items-center justify-center flex cursor-pointer hover:border-b-4 border-amber-500 w-16">
        <Link href={"men"}>Men</Link>
      </li>
      <li className="h-full items-center justify-center flex cursor-pointer hover:border-b-4 border-amber-500 w-16">
        <Link href={"women"}>Women</Link>
      </li>
      <li className="h-full items-center justify-center flex cursor-pointer hover:border-b-4 border-amber-500 w-16">
        <Link href={"about"}>About</Link>
      </li>
      <li className="h-full items-center justify-center flex cursor-pointer hover:border-b-4 border-amber-500 w-16">
        <Link href={"contact"}>Contact</Link>
      </li>
      <div className="spacer grow "></div>
      <li
        className="w-6 aspect-square mr-8 box-border font-black cursor-pointer relative"
        // onMouseOver={() => {
        //   setIsShowingCartOverView(true);
        // }}
        // onMouseLeave={() => {
        //   setIsShowingCartOverView(false);
        // }}
        onClick={() => {
          setIsShowingCartOverView(!isShowingCartOverView);
        }}
      >
        <div className="relative box-border">
          {!!cartContext?.totalCartItems && (
            <span className="absolute bg-orange rounded-full aspect-video min-w-4 text-xs text-center z-10 right-0 top-0">
              {Math.min(cartContext?.totalCartItems || 0, 99)}
              {cartContext?.totalCartItems > 99 ? "+" : ""}
            </span>
          )}
          <Image
            src={"/images/icon-cart.svg"}
            height={"100"}
            width={"100"}
            alt="Cart Icon"
            className="absolute top-0 left-0"
          />
        </div>
        {isShowingCartOverView && (
          <div className="z-20 absolute w-80 right-0 top-7 bg-white shadow-2xl">
            <AppCartOverview />
          </div>
        )}
      </li>
      <li className="w-12 aspect-square border-2 rounded-full border-orange cursor-pointer z-0">
        <Image
          src={"/images/image-avatar.png"}
          height={"100"}
          width={"100"}
          alt="Avatar"
        ></Image>
      </li>
    </menu>
  );
}
