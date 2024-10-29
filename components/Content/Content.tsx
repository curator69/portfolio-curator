import Home from "../home/Home";
import "./Content.css";

const Content = ({
  slider,
  setSlider,
  setOpenedBy,
}: {
  slider: "navigation" | "socials" | null;
  setSlider: () => void;
  setOpenedBy: () => void;
}) => {
  return (
    <div
      className="main-wrapper"
      id="main-wrapper"
      style={{
        top: !slider ? 0 : slider === "navigation" ? "50px" : "-50px",
        right: slider ? "200px" : 0,
        borderTopRightRadius: !slider
          ? 0
          : slider === "navigation"
          ? "50px"
          : "0px",
        borderBottomRightRadius: !slider
          ? 0
          : slider === "socials"
          ? "50px"
          : "0px",
        height: "100%",
      }}
    >
      <Home slider={slider} setSlider={setSlider} setOpenedBy={setOpenedBy} />
    </div>
  );
};

export default Content;
