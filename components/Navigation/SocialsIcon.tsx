import styles from "./SocialsIcon.module.scss";

import { useSlider } from "@/store/useSlider";

const SocialsIcon = () => {
  const { slider, setSlider, setOpenedBy } = useSlider();

  if (slider === "navigation") return null;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.circlesWrapper}
        onClick={() => {
          setSlider(slider === "socials" ? null : "socials");
          setOpenedBy("socials");
        }}
      >
        <div className={styles.circle_1}></div>
        <div className={styles.circle_2}></div>
      </div>
    </div>
  );
};

export default SocialsIcon;
