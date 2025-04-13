"use client";
import Image from "next/image";
import { useState } from "react";
import { AppImageModal } from "./AppImageModal";
import { AppImageCarousal } from "./AppImageCarousal";

export function AppProductImageGallery({ imageURL }: { imageURL: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="w-full h-full block md:hidden">
        <AppImageCarousal
          onNextClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
          onPrevClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
          isNextDisabled={currentIndex == imageURL.length - 1}
          isPrevDisabled={currentIndex == 0}
        >
          <Image
            src={imageURL[currentIndex]}
            alt=""
            className="h-fit w-full rounded-lg"
            width={"100"}
            height={"100"}
          />
        </AppImageCarousal>
      </div>
      <div className="carousal flex-row flex-wrap gap-10 box-content h-full hidden md:flex">
        {isModalOpen && (
          <AppImageModal
            allImages={imageURL}
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        )}

        <div
          className="w-full aspect-square flex items-center justify-center"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <Image
            src={imageURL[currentIndex]}
            alt="Product Image"
            width={"100"}
            height={"100"}
            className="w-full aspect-square rounded-md"
          />
        </div>
        <div className="w-full flex flex-row gap-2 h-fit snap-x overflow-x-scroll">
          {imageURL.map((e, index) => {
            return (
              <div
                key={index}
                className={`${
                  currentIndex == index &&
                  "border-2 rounded-sm border-solid border-orange box-content"
                } `}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              >
                <CarousalChildItem
                  url={e}
                  className={`${currentIndex == index && "blur-[2px]"}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function CarousalChildItem({
  url,
  className = "",
}: {
  url: string;
  className?: string;
}) {
  return (
    <div className="w-16 aspect-square cursor-pointer">
      <Image
        src={url}
        alt="Product Image"
        width={"100"}
        height={"100"}
        className={`w-full aspect-square rounded-sm ${className}`}
      />
    </div>
  );
}
