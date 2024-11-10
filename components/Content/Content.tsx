import { Slider } from "@/store/useSlider";
import styles from "./Content.module.scss";

type Props = {
  children: React.ReactNode;
  slider: Slider;
};

const Content = ({ children, slider }: Props) => {
  return (
    <div
      className={styles.mainWrapper}
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
      {children}
    </div>
  );
};

export default Content;
