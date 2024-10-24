import { Boxes } from "../ui/background-boxes";
import { Kalam, Kavivanar } from "next/font/google";
import styles from "./Home.module.scss";
import Link from "next/link";

const kalam = Kalam({
  weight: "700",
  subsets: ["latin"],
});

const kavivanar = Kavivanar({
  weight: "400",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900 flex flex-col gap-10 items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* <Boxes /> */}
      <article className="flex flex-col items-center justify-center w-full h-full">
        <AnimatedName />
        <AnimatedHeading />
        <LinkToAboutButton />
      </article>
    </div>
  );
};

export default Home;

const AnimatedName = () => {
  return (
    <div className={`${styles.animatedNameWrapper} ${kalam.className}`}>
      <h1>RUSHIKESH</h1>
    </div>
  );
};

const AnimatedHeading = () => {
  return (
    <i
      className={`${kavivanar.className} ${styles.animatedHeadingWrapper} text-[2rem] font-light z-30 group relative text-center w-full`}
    >
      <span className="relative inline-block cursor-default">
        A Full-stack developer from India.
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-700 group-hover:w-full"></span>
      </span>
    </i>
  );
};

const LinkToAboutButton = () => {
  return (
    <Link
      href="/contact"
      className={`${styles.linkToAboutButton} relative inline-flex w-fit h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-30 mt-12`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-lg font-medium text-white backdrop-blur-3xl">
        Uncover my story &nbsp; ➢
      </span>
    </Link>
  );
};
