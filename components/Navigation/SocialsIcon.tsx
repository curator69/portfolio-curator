import styles from "./SocialsIcon.module.scss";

const SocialsIcon = ({
  slider,
  setSlider,
  setOpenedBy,
}: {
  slider: "navigation" | "socials" | null;
  setSlider: () => void;
  setOpenedBy: () => void;
}) => {
  if (slider === "navigation") return null;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.circlesWrapper}
        onClick={() => {
          setSlider();
          setOpenedBy();
        }}
      >
        <div className={styles.circle_1}></div>
        <div className={styles.circle_2}></div>
      </div>
    </div>
  );
};

export default SocialsIcon;
