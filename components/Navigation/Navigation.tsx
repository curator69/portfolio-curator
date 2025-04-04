import Link from "next/link";

import styles from "./Navigation.module.scss";
import { OpenedBy, useSlider } from "@/store/useSlider";

type Props = {
  openedBy: OpenedBy;
};

const Navigation = ({ openedBy }: Props) => {
  const { setSlider } = useSlider();

  const handleLinkClick = () => {
    setSlider(null);
  };

  return (
    <div
      className={`${styles.wrapper} ${
        openedBy === "navigation" ? "justify-start" : "justify-end"
      }`}
    >
      <NavigationLinks openedBy={openedBy} onLinkClick={handleLinkClick} />
      <SocialLinks openedBy={openedBy} onLinkClick={handleLinkClick} />
    </div>
  );
};

export default Navigation;

const NavigationLinks = ({
  openedBy,
  onLinkClick,
}: {
  openedBy: OpenedBy;
  onLinkClick: () => void;
}) => {
  if (openedBy === "socials") return null;

  return (
    <div className={styles.navigationLinksWrapper}>
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className="navigation-link"
          onClick={onLinkClick}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const SocialLinks = ({
  openedBy,
  onLinkClick,
}: {
  openedBy: OpenedBy;
  onLinkClick: () => void;
}) => {
  if (openedBy === "navigation") return null;

  return (
    <div className={styles.socialLinksWrapper}>
      {socials.map((link, index) => (
        <Link
          href={link.href}
          target="_blank"
          key={index}
          className="navigation-link"
          onClick={onLinkClick}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const socials = [
  {
    name: "Github",
    href: "https://github.com/curator69",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rushikesh-k-3a3977153/",
  },
  {
    name: "Twitter",
    href: "https://x.com/curator142",
  },
  {
    name: "Mail",
    href: "mailto:rushikeshkhillari10@gmail.com",
  },
];
