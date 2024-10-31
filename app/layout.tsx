"use client";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisScroll from "./LenisScroll";
import Navigation from "@/components/Navigation/Navigation";
import HamburgerIcon from "@/components/Navigation/HamburgerIcon";
import Content from "@/components/Content/Content";
import { useSlider } from "@/store/useSlider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Rushikesh',
//   description: "Rushikesh's Portfolio",
// };

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const { slider, setSlider, openedBy, setOpenedBy } = useSlider();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          {/* For smooth scroll */}
          <LenisScroll />

          <Navigation openedBy={openedBy} />
          <HamburgerIcon
            slider={slider}
            onClick={() => setSlider(slider === null ? "navigation" : null)}
            setOpenedBy={() => setOpenedBy("navigation")}
          />
          <Content slider={slider}>{children}</Content>
        </div>
      </body>
    </html>
  );
}
