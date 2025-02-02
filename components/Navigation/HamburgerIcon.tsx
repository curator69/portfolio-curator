import { Slider } from "@/store/useSlider";
import "./Hambuger.css";

type Props = {
  slider: Slider;
  onClick: () => void;
  setOpenedBy: () => void;
};

const HamburgerIcon = ({ slider, onClick, setOpenedBy }: Props) => {
  if (slider === "socials") return null;

  return (
    <div className="navbar">
      <div className="container nav-container">
        <input
          className="checkbox"
          type="checkbox"
          onClick={() => {
            onClick();
            setOpenedBy();
          }}
        />
        <div className="hamburger-lines">
          <span
            className={`line line1 ${
              slider === "navigation" ? "!bg-black" : "!bg-white"
            }`}
          ></span>
          <span
            className={`line line2 ${
              slider === "navigation" ? "!bg-black" : "!bg-white"
            }`}
          ></span>
          <span
            className={`line line3 ${
              slider === "navigation" ? "!bg-black" : "!bg-white"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
