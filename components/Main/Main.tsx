"use client";

import { useState } from "react";
import Content from "../Content/Content";
import HamburgerIcon from "../Navigation/HamburgerIcon";
import Navigation from "../Navigation/Navigation";

const Main = () => {
  const [mainSlider, setMainSlider] = useState(false);

  console.log(mainSlider);

  return (
    <div className="relative">
      <Navigation />
      <HamburgerIcon mainSlider={mainSlider} setMainSlider={setMainSlider} />
      <Content mainSlider={mainSlider} />
    </div>
  );
};

export default Main;
