import "./Main.css";

// Components import
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
      <Hero />
    </div>
  );
};

export default Main;
