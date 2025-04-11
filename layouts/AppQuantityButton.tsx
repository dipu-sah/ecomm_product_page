"use client";

import { useState } from "react";

export function AppQuantitySelectorButton({
  initialQuantity = 0,
}: {
  initialQuantity?: number;
}) {
  const [currentQuantity, setCurrentQuantity] = useState(initialQuantity);
  function quantityIncrease() {
    setCurrentQuantity(currentQuantity + 1);
  }
  function quantityDecrease() {
    setCurrentQuantity(currentQuantity - 1);
  }
  return (
    <div className="flex flex-row bg-gray-100 w-fit rounded-md text-xl box-border p-2 font-bold">
      <button
        className="w-8 text-orange  cursor-pointer"
        onClick={quantityDecrease}
        disabled={currentQuantity == 0}
      >
        -
      </button>
      <span className="w-16 text-center  text-Black">{currentQuantity}</span>
      <button
        className="w-8 text-orange cursor-pointer"
        onClick={quantityIncrease}
      >
        +
      </button>
    </div>
  );
}
