import { useState, useEffect } from "react";
import CrypticName from "./CrypticName";
import SubText from "./SubText";
import AnimatedButton from "./AnimatedButton";

const Home = () => {
  const fullTitle = "Rushikesh";
  const fullSubtext = "A Software Engineer from Mumbai, India.";
  const [startSubtext, setStartSubtext] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Start subtext animation after title is expected to finish
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartSubtext(true);
    }, fullTitle.length * 150 + 500); // Approximate time for name to finish + buffer

    return () => clearTimeout(timeout);
  }, []);

  // Handler for when subtext animation completes
  const handleSubtextComplete = () => {
    // Show button after subtext animation is complete
    setTimeout(() => {
      setShowButton(true);
    }, 500); // Small delay before showing button
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-900/10 blur-[100px] pointer-events-none"></div>

      <article className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 items-center justify-center w-full h-full z-10">
        {/* Cryptic Name Component */}
        <div className="relative">
          <CrypticName
            text={fullTitle}
            className="text-4xl sm:text-6xl md:text-[8rem] uppercase leading-none bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent font-extrabold drop-shadow-md"
          />

          {/* Subtle line decoration */}
          <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 w-full flex justify-center">
            <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
          </div>
        </div>

        {/* Subtext Component */}
        <SubText
          text={fullSubtext}
          startAnimation={startSubtext}
          onComplete={handleSubtextComplete}
          className="text-lg sm:text-xl md:text-[2rem] font-medium leading-none text-center mt-4 sm:mt-6 md:mt-8"
        />

        {/* Button Component */}
        <AnimatedButton
          href="/about"
          text="About me"
          show={showButton}
          className="border border-emerald-500/70 rounded-full p-1.5 sm:p-2 px-3 sm:px-4 mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg hover:bg-emerald-500/10 transition-colors duration-300"
        />
      </article>
    </div>
  );
};

export default Home;
