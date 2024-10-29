"use client";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisScroll from "./LenisScroll";
import Navigation from "@/components/Navigation/Navigation";
import HamburgerIcon from "@/components/Navigation/HamburgerIcon";
import { useState } from "react";
import Content from "@/components/Content/Content";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Rushikesh',
//   description: "Rushikesh's Portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [slider, setSlider] = useState<"navigation" | "socials" | null>(null);
  const [openedBy, setOpenedBy] = useState<"navigation" | "socials">(
    "navigation"
  );

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
          <Content
            slider={slider}
            setSlider={() => setSlider(slider === null ? "socials" : null)}
            setOpenedBy={() => setOpenedBy("socials")}
          />
        </div>

        {children}
      </body>
    </html>
  );
}
