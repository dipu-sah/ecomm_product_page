"use client";
import { url } from "inspector";
import Image from "next/image";
import { useState } from "react";

export function AppCarousal({ imageURL }: { imageURL: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="carousal flex flex-row flex-wrap gap-10 box-content py-8">
      {isModalOpen && (
        <div
          onKeyDown={(key) => {
            console.log({ key });

            if (key.key == "Esc") {
              setIsModalOpen(false);
            }
          }}
          className="z-10 absolute top-0 left-0 w-full h-full flex flex-row justify-center items-center"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <div
            className="content w-1/2 h-1/2"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="w-full h-full bg-orange"></div>
          </div>
        </div>
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
        ></Image>
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
              ></CarousalChildItem>
            </div>
          );
        })}
      </div>
    </div>
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
      ></Image>
    </div>
  );
}
