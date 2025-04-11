import Image from "next/image";
import { useState } from "react";

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
      className="z-10 absolute top-0 left-0 w-full h-full flex flex-row justify-center items-center backdrop-brightness-20"
      onClick={() => {
        onClose();
      }}
    >
      <div
        className="content w-1/2 h-[80vh] flex flex-col justify-center items-center gap-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="w-fit h-full flex justify-center items-center relative box-border px-6">
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
            ></Image>
          </button>

          <Image
            src={allImages[currentIndex]}
            alt=""
            className="h-full w-fit rounded-lg"
            width={"100"}
            height={"100"}
          />

          {currentIndex > 0 && (
            <button
              className="cursor-pointer absolute left-0 bg-white rounded-full h-12 aspect-square flex justify-center items-center"
              onClick={() => {
                setCurrentIndex(currentIndex - 1);
              }}
            >
              <Image
                height={"100"}
                width={"100"}
                alt="previous"
                className="w-4"
                src={"/images/icon-previous.svg"}
              ></Image>
            </button>
          )}
          {currentIndex < allImages.length - 1 && (
            <button
              className="cursor-pointer absolute right-0 bg-white rounded-full h-12 aspect-square  flex justify-center items-center"
              onClick={() => {
                setCurrentIndex(currentIndex + 1);
              }}
            >
              <Image
                height={"100"}
                width={"100"}
                alt="previous"
                className="w-4"
                src={"/images/icon-next.svg"}
              ></Image>
            </button>
          )}
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
              className="w-20 rounded-md cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
