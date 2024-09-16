import "./Hambuger.css";

const HamburgerIcon = ({
  mainSlider,
  setMainSlider,
}: {
  mainSlider: boolean;
  setMainSlider: (value: boolean) => void;
}) => {
  return (
    // <div
    //   className="absolute z-30 top-4 left-4 w-fit cursor-pointer"
    //   onClick={() => setMainSlider(!mainSlider)}
    // >
    //   <div className="flex justify-between items-center h-[62px] max-w-[1050px] w-[90%] mx-auto">
    //     <input
    //       className="absolute h-8 w-8 top-5 left-5 z-5 opacity-0 cursor-pointer"
    //       type="checkbox"
    //       name=""
    //       id="hamburger-toggle"
    //     />
    //     <div className="absolute top-[17px] left-[20px] h-[26px] w-8 z-2 flex flex-col justify-between">
    //       <span
    //         className={`block h-1 w-full rounded-[10px] ${
    //           !mainSlider ? "bg-black" : "bg-white"
    //         } transition-transform duration-400 ease-in-out origin-top-left hamburger-line1`}
    //       ></span>
    //       <span className="block h-1 w-full rounded-[10px] bg-black transition-transform duration-200 ease-in-out hamburger-line2"></span>
    //       <span className="block h-1 w-full rounded-[10px] bg-black transition-transform duration-400 ease-in-out origin-bottom-left hamburger-line3"></span>
    //     </div>
    //   </div>
    // </div>

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
