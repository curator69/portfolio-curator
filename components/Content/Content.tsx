import "./Content.css";

const Content = ({ mainSlider }: { mainSlider: boolean }) => {
  return (
    <div
      className="main-wrapper"
      id="main-wrapper"
      style={{
        top: mainSlider ? "50px" : 0,
        right: mainSlider ? "200px" : 0,
        borderTopRightRadius: mainSlider ? "50px" : 0,
        height: "100%",
      }}
    >
      <div>content</div>
    </div>
  );
};

export default Content;