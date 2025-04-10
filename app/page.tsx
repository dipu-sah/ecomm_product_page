import { AppMenu } from "@/layouts/AppMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABCFrontend Mentor | E-commerce product page",
  icons: "../images/favicon-32x32.png",
};
export default function Home() {
  return (
    <main className="font-kumbh-sans box-content px-32">
      <header className="border-b-1 border-b-dark-greyish-blue">
        <AppMenu></AppMenu>
      </header>
      <section></section>
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
