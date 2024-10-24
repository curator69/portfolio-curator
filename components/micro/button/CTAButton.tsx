import Link from "next/link";

const CTAButton = () => {
  return (
    <Link
      href="/contact"
      className="relative inline-flex w-fit h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-30 mt-S12 transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-lg font-medium text-white backdrop-blur-3xl">
        Uncover my story &nbsp; ➢
      </span>
    </Link>
  );
};

export default CTAButton;
