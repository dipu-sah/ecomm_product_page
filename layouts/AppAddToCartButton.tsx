import Image from "next/image";

export function AppAddToCartButton({
  onClick = () => {},
}: {
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-orange w-full h-12 rounded-md cursor-pointer flex flex-row justify-center items-center text-black font-bold gap-2"
    >
      <Image
        src={"/images/icon-cart.svg"}
        height={"100"}
        width={"100"}
        className="w-[0.9rem] aspect-square"
        alt="Add to Cart Icon"
      />
      Add to Cart
    </button>
  );
}
