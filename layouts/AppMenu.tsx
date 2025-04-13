"use client";
import Image from "next/image";
import Link from "next/link";
import { AppCartOverview } from "./AppCartOverView";
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/cartContext";

export function AppMenu() {
  const [isShowingCartOverView, setIsShowingCartOverView] =
    useState<boolean>(false);
  const [isShowingMobileMenu, setIsShowingMobileMenu] =
    useState<boolean>(false);
  const cartContext = useContext(CartContext);
  function MenuItem({ className = "" }: { className?: string }) {
    return (
      <menu
        className={`list-none gap-5 items-center flex grow h-full ${className}`}
      >
        <li className="h-full items-center flex cursor-pointer hover:border-b-4 border-amber-500">
          <Link href={"collections"}>Collections</Link>
        </li>
        <li className="h-full items-center flex cursor-pointer hover:border-b-4 border-amber-500">
          <Link href={"men"}>Men</Link>
        </li>
        <li className="h-full items-center  flex cursor-pointer hover:border-b-4 border-amber-500">
          <Link href={"women"}>Women</Link>
        </li>
        <li className="h-full items-center  flex cursor-pointer hover:border-b-4 border-amber-500">
          <Link href={"about"}>About</Link>
        </li>
        <li className="h-full items-center flex cursor-pointer hover:border-b-4 border-amber-500">
          <Link href={"contact"}>Contact</Link>
        </li>
      </menu>
    );
  }
  return (
    <>
      <div className="flex-row list-none h-24 gap-3 items-center flex px-4 md:px-0">
        <div className="flex flex-row gap-4">
          <Image
            onClick={() => {
              setIsShowingMobileMenu(true);
            }}
            src={"images/icon-menu.svg"}
            alt=""
            width={200}
            height={30}
            className="w-4 aspect-square md:hidden"
          />
          <Link href="/" className="w-28">
            <Image
              src={"/logo.svg"}
              alt=""
              width={200}
              height={30}
              className="w-full"
            />
          </Link>
        </div>
        <div className="spacer md:w-16"></div>
        {isShowingMobileMenu && (
          <div className="bg-white z-10 fixed top-0 left-0 w-1/2 h-screen box-border p-4 font-bold text-black">
            <Image
              onClick={() => {
                setIsShowingMobileMenu(false);
              }}
              src={"images/icon-close.svg"}
              alt=""
              width={200}
              height={30}
              className="w-4 aspect-square md:hidden"
            />
            <MenuItem className="h-fit w-fit flex flex-col" />
          </div>
        )}
        <MenuItem className="hidden md:flex" />
        <div className="flex justify-end grow gap-4">
          <div
            className="box-border font-black cursor-pointer relative flex justify-center items-center"
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
            <div className="relative box-border w-6 aspect-square ">
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
              <div className="z-20 absolute w-60 sm:w-72  top-19 right-[-60] md:right-0 md:top-7 bg-white shadow-2xl rounded-xl">
                <AppCartOverview />
              </div>
            )}
          </div>
          <div className="w-12 aspect-square border-2 rounded-full border-orange cursor-pointer z-0">
            <Image
              src={"/images/image-avatar.png"}
              height={"100"}
              width={"100"}
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </>
  );
}
