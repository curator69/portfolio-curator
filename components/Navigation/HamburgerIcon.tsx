import "./Hambuger.css";

const HamburgerIcon = ({
  mainSlider,
  setMainSlider,
}: {
  mainSlider: boolean;
  setMainSlider: (value: boolean) => void;
}) => {
  return (
    <div className="navbar" onClick={() => setMainSlider(!mainSlider)}>
      <div className="container nav-container">
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span
            className={`line line1 ${mainSlider ? "!bg-white" : "!bg-black"}`}
          ></span>
          <span
            className={`line line2 ${mainSlider ? "!bg-white" : "!bg-black"}`}
          ></span>
          <span
            className={`line line3 ${mainSlider ? "!bg-white" : "!bg-black"}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
