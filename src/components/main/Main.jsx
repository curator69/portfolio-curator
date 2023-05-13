import "./Main.css";

const Main = ({ mainSlider }) => {
  return (
    <div
      className="main-wrapper"
      id="main-wrapper"
      style={{
        top: mainSlider && "50px",
        left: mainSlider && "200px",
        borderTopLeftRadius: mainSlider && "100px",
      }}
    >
      Main
    </div>
  );
};

export default Main;
