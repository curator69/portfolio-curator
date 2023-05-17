import "./Main.css";

import Hero from "../hero/Hero";

const Main = ({ mainSlider }) => {
  return (
    <div
      className="main-wrapper"
      id="main-wrapper"
      style={{
        top: mainSlider && "50px",
        left: mainSlider && "200px",
        borderTopLeftRadius: mainSlider && "50px",
      }}
    >
      <div
        style={{
          borderTopLeftRadius: mainSlider && "50px",
        }}
        className="main-blur"
      >
        <Hero />
      </div>
    </div>
  );
};

export default Main;
