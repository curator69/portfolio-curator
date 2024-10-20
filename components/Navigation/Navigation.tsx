import Link from "next/link";

const Navigation = () => {
  return (
    <div className="absolute z-10 bg-[#B9B4B1] w-screen h-screen pt-24 pr-4 flex flex-col gap-4 items-end">
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
