import { useState, useEffect } from "react";
import CrypticName from "./CrypticName";
import SubText from "./SubText";
import AnimatedButton from "./AnimatedButton";

const Home = () => {
  const fullTitle = "Rushikesh";
  const fullSubtext = "A Full-stack developer from Mumbai, India.";
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
    <div className="relative w-full h-full overflow-hidden bg-black flex flex-col gap-10 items-center justify-center rounded-lg">
      <article className="flex flex-col gap-2 items-center justify-center w-full h-full">
        {/* Cryptic Name Component */}
        <CrypticName
          text={fullTitle}
          className="text-[8rem] uppercase leading-none bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-transparent font-extrabold drop-shadow-md"
        />

        {/* Subtext Component */}
        <SubText
          text={fullSubtext}
          startAnimation={startSubtext}
          onComplete={handleSubtextComplete}
          className="text-[2rem] font-medium leading-none"
        />

        {/* Button Component */}
        <AnimatedButton
          href="/about"
          text="About me"
          show={showButton}
          className="border rounded-full p-2 px-4 mt-6"
        />
      </article>
    </div>
  );
};

export default Home;
