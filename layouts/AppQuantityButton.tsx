export function AppQuantitySelectorButton({
  currentQuantity = 0,
  quantityDecrease = () => {},
  quantityIncrease = () => {},
}: {
  currentQuantity?: number;
  quantityIncrease?: () => void;
  quantityDecrease?: () => void;
}) {
  return (
    <div className="flex flex-row bg-gray-100 w-full rounded-md text-xl box-border p-2 font-bold justify-center items-center">
      <button
        className="w-8 text-orange  cursor-pointer"
        onClick={quantityDecrease}
        disabled={currentQuantity == 0}
      >
        -
      </button>
      <span className="min-w-16 grow text-center  text-Black">
        {currentQuantity}
      </span>
      <button
        className="w-8 text-orange cursor-pointer"
        onClick={quantityIncrease}
      >
        +
      </button>
    </div>
  );
}
