import Link from "next/link";

const Home = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black flex flex-col gap-10 items-center justify-center rounded-lg">
      <article className="flex flex-col gap-2 items-center justify-center w-full h-full">
        <h1 className="text-[8rem] uppercase leading-none">Rushikesh</h1>
        <span className="relative text-[2rem] font-medium leading-none">
          A Full-stack developer from{" "}
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/Mumbai,+Maharashtra/@19.0821775,72.716378,70857m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!8m2!3d19.0759837!4d72.8776559!16zL20vMDR2bXA?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
            className="hover:underline underline-offset-2"
          >
            Mumbai, India.
          </Link>
        </span>
        <Link href="/about" className="border rounded-full p-2 px-4 mt-6">
          About me
        </Link>
      </article>
    </div>
  );
};

export default Home;
