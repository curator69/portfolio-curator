import Link from "next/link";

const Navigation = () => {
  return (
    <div className="absolute z-10 bg-black w-screen h-screen pt-24 pl-4 flex flex-col gap-4">
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
