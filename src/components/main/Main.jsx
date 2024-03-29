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
        height: "100%",
      }}
    >
      <Hero mainSlider={mainSlider} />
    </div>
  );
};

export default Main;
