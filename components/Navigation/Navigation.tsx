import Link from "next/link";

import styles from "./Navigation.module.scss";

const Navigation = ({ openedBy }: { openedBy: "navigation" | "socials" }) => {
  return (
    <div className={styles.wrapper}>
      <NavigationLinks openedBy={openedBy} />
      <SocialLinks openedBy={openedBy} />
    </div>
  );
};

export default Navigation;

const NavigationLinks = ({
  openedBy,
}: {
  openedBy: "navigation" | "socials";
}) => {
  if (openedBy === "socials") return null;

  return (
    <div className={styles.navigationLinksWrapper}>
      {links.map((link, index) => (
        <Link href={link.href} key={index} className="navigation-link">
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const SocialLinks = ({ openedBy }: { openedBy: "navigation" | "socials" }) => {
  if (openedBy === "navigation") return null;

  return (
    <div className={styles.socialLinksWrapper}>
      {socials.map((link, index) => (
        <Link href={link.href} key={index} className="navigation-link">
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
