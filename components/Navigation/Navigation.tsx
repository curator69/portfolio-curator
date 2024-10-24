import Link from "next/link";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      {links.map((link, index) => (
        <Link href={link.href} key={index} className="navigation-link">
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;

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
