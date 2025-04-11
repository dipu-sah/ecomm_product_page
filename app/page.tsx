import { AppCarousal } from "@/layouts/AppCarousal";
import { AppMenu } from "@/layouts/AppMenu";
import { AppQuantitySelectorButton } from "@/layouts/AppQuantityButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | E-commerce product page",
  icons: "/images/favicon-32x32.png",
};
export default function Home() {
  return (
    <main className="font-kumbh-sans box-content px-32">
      <header className="border-b-1 border-b-dark-greyish-blue">
        <AppMenu></AppMenu>
      </header>
      <section className="flex flex-row gap-10 box-content px-10">
        <div className="w-[30rem]">
          <AppCarousal
            imageURL={[
              "/images/image-product-1.jpg",
              "/images/image-product-2.jpg",
              "/images/image-product-3.jpg",
              "/images/image-product-4.jpg",
            ]}
          ></AppCarousal>
        </div>
        <aside className="flex flex-col gap-6 box-content pt-24 text-gray-600">
          <h4 className="font-[600] uppercase">Sneaker Company</h4>
          <h3 className="text-3xl font-bold text-black">
            Fall Limited Edition Sneakers
          </h3>
          <article>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </article>
          <div className="pricing-details">
            <label className="font-bold text-2xl gap-5 flex flex-row flex-wrap">
              <span className="text-black">$125.00</span>
              <span className="bg-black text-white text-base rounded-md box-border p-[0.3rem] text-center">
                50%
              </span>
            </label>
            <label className="line-through">$250.00</label>
            <AppQuantitySelectorButton />
            <button> Add to cart</button>
          </div>
        </aside>
      </section>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Kumar</a>.
      </div>
    </main>
  );
}
