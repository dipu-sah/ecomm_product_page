import Image from "next/image";
import Link from "next/link";

export function AppMenu() {
  return (
    <menu className="flex flex-row list-none h-24 gap-3 items-center">
      <li className="pr-16">
        <Link href="/">
          <Image src={"/logo.svg"} alt="" width={200} height={30}></Image>
        </Link>
      </li>
      <li className="h-full items-center justify-center flex cursor-pointer hover:border-b-4 border-amber-500 w-16">
        Collections
      </li>
      <li className="h-full items-center justify-center flex cursor-pointer hover:border-b-4 border-amber-500 w-16">
        Men
      </li>
      <li className="h-full items-center justify-center flex cursor-pointer hover:border-b-4 border-amber-500 w-16">
        Women
      </li>
      <li className="h-full items-center justify-center flex cursor-pointer hover:border-b-4 border-amber-500 w-16">
        About
      </li>
      <li className="h-full items-center justify-center flex cursor-pointer hover:border-b-4 border-amber-500 w-16">
        Contact
      </li>
      <div className="spacer grow "></div>
      <li className="w-6 aspect-square mr-8 box-border font-black cursor-pointer">
        <Image
          src={"/images/icon-cart.svg"}
          height={"100"}
          width={"100"}
          alt="Cart Icon"
        ></Image>
      </li>
      <li className="w-12 aspect-square border-2 rounded-full border-orange cursor-pointer">
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
