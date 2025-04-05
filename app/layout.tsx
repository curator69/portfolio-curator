"use client";

import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import HamburgerIcon from "@/components/Navigation/HamburgerIcon";
import SocialButton from "@/components/Navigation/SocialButton";
import Content from "@/components/Content/Content";
import { useSlider } from "@/store/useSlider";
import { GeistMono } from "geist/font/mono";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const { slider, setSlider, openedBy, setOpenedBy } = useSlider();

  return (
    <html lang="en" className={GeistMono.className}>
      <head>
        <style></style>
      </head>
      <body>
        <div className="relative">
          <Navigation openedBy={openedBy} />
          <HamburgerIcon
            slider={slider}
            onClick={() => setSlider(slider === null ? "navigation" : null)}
            setOpenedBy={() => setOpenedBy("navigation")}
          />
          <SocialButton
            slider={slider}
            onClick={() => setSlider(slider === null ? "socials" : null)}
            setOpenedBy={() => setOpenedBy("socials")}
          />
          <Content slider={slider}>{children}</Content>
        </div>
      </body>
    </html>
  );
}
