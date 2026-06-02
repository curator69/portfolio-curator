import { useState, useEffect, useRef } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
});

const crypticChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`";

interface CrypticNameProps {
  text: string;
  className?: string;
}

const CrypticName: React.FC<CrypticNameProps> = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [letterStates, setLetterStates] = useState<string[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const intervalRefs = useRef<{ [key: number]: NodeJS.Timeout }>({});

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setDisplayText(text);
      setLetterStates(text.split(""));
    }
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        setDisplayText(text);
        setLetterStates(text.split(""));
      }
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, [text]);

  // Typewriter effect — skip if reduced motion
  useEffect(() => {
    if (reducedMotion) return;
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
        setLetterStates((prev) => [...prev, text[displayText.length]]);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [displayText, text, reducedMotion]);

  const handleMouseEnter = (index: number) => {
    if (reducedMotion) return;
    setHoveredIndex(index);

    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]);
    }

    const originalChar = text[index];
    let iterations = 0;
    const maxIterations = 10;

    intervalRefs.current[index] = setInterval(() => {
      if (iterations >= maxIterations) {
        setLetterStates((prev) => {
          const newStates = [...prev];
          newStates[index] = originalChar;
          return newStates;
        });
        clearInterval(intervalRefs.current[index]);
        return;
      }

      setLetterStates((prev) => {
        const newStates = [...prev];
        const randomChar =
          crypticChars[Math.floor(Math.random() * crypticChars.length)];
        newStates[index] = randomChar;
        return newStates;
      });

      iterations++;
    }, 100);
  };

  const handleMouseLeave = (index: number) => {
    if (reducedMotion) return;
    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]);

      setLetterStates((prev) => {
        const newStates = [...prev];
        newStates[index] = text[index];
        return newStates;
      });
    }

    setHoveredIndex(null);
  };

  return (
    <h1
      className={`${className} ${orbitron.className} tracking-tight whitespace-nowrap`}
    >
      {displayText.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-200 hover:text-emerald-400"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          {letterStates[index] || char}
        </span>
      ))}
    </h1>
  );
};

export default CrypticName;
