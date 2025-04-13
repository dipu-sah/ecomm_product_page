import Image from "next/image";
import { ReactNode } from "react";

export function AppImageCarousal({
  onNextClick = () => {},
  onPrevClick = () => {},
  isNextDisabled = false,
  isPrevDisabled = true,
  children,
}: {
  onNextClick: () => void;
  onPrevClick: () => void;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
  children: ReactNode;
}) {
  return (
    <div className="w-full h-fit flex justify-center items-center relative box-border">
      <div className="w-full h-full">{children}</div>
      {!isPrevDisabled && (
        <button
          className="cursor-pointer absolute left-4 bg-white rounded-full h-12 aspect-square flex justify-center items-center"
          onClick={() => {
            onPrevClick();
          }}
        >
          <Image
            height={"100"}
            width={"100"}
            alt="previous"
            className="w-4"
            src={"/images/icon-previous.svg"}
          />
        </button>
      )}
      {!isNextDisabled && (
        <button
          className="cursor-pointer absolute right-4 bg-white rounded-full h-12 aspect-square  flex justify-center items-center"
          onClick={() => {
            onNextClick();
          }}
        >
          <Image
            height={"100"}
            width={"100"}
            alt="previous"
            className="w-4"
            src={"/images/icon-next.svg"}
          />
        </button>
      )}
    </div>
  );
}
