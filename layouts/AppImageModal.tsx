import Image from "next/image";
import { useState } from "react";
import { AppImageCarousal } from "./AppImageCarousal";

export function AppImageModal({
  onClose = () => {},
  initialIndex = 0,
  allImages,
}: {
  initialIndex?: number;
  allImages: string[];
  onClose?: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  return (
    <div
      className="z-10 absolute top-0 left-0 w-full h-screen flex flex-row justify-center items-center backdrop-brightness-20"
      onClick={() => {
        onClose();
      }}
    >
      <div
        className="content w-1/2 h-full flex flex-col justify-center items-center gap-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="w-2/3 h-fit flex justify-center items-center relative box-border">
          <button
            className="cursor-pointer absolute top-[-4rem] right-0  rounded-full h-12 aspect-square  flex justify-center items-center"
            onClick={() => {
              onClose();
            }}
          >
            <Image
              height={"100"}
              width={"100"}
              alt="previous"
              className="w-4 "
              src={"/images/icon-close.svg"}
            />
          </button>
          <AppImageCarousal
            onNextClick={() => {
              setCurrentIndex(currentIndex + 1);
            }}
            onPrevClick={() => {
              setCurrentIndex(currentIndex - 1);
            }}
            isNextDisabled={currentIndex == allImages.length - 1}
            isPrevDisabled={currentIndex == 0}
          >
            <div className="mx-10 box-border">
              <Image
                src={allImages[currentIndex]}
                alt=""
                className="h-fit w-full rounded-4xl"
                width={"100"}
                height={"100"}
              />
            </div>
          </AppImageCarousal>
        </div>
        <div className="flex flex-row overflow-scroll gap-4 w-fit">
          {allImages.map((imageUrl, index) => (
            <Image
              onClick={() => {
                setCurrentIndex(index);
              }}
              width={"100"}
              height={"100"}
              key={index}
              src={imageUrl}
              alt=""
              className={`${
                currentIndex == index && "blur-xs"
              } w-20 rounded-md cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
