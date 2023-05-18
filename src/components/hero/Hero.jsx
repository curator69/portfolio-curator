import { useEffect } from "react";
import "./Hero.css";

const Hero = ({ mainSlider }) => {
  const helloArr = [
    "Hello",
    "नमस्ते",
    "Olá",
    "你好",
    "Hola",
    "مرحبا",
    "হ্যালো",
  ];

  let currentIndex = 0;
  const helloSpan = document.querySelector(
    ".text-section-wrapper span:first-child"
  );

  function updateHello() {
    helloSpan.textContent = helloArr[currentIndex];
    currentIndex = (currentIndex + 1) % helloArr.length; // Wrap around to the beginning of the array
  }

  useEffect(() => {
    // Initial update
    // updateHello();

    // Update hello every 2 seconds
    setInterval(updateHello, 2000);
  }, [currentIndex]);

  return (
    <div
      className="hero-wrapper"
      style={{ borderTopLeftRadius: mainSlider && "50px" }}
    >
      <div className="text-section">
        <div className="text-section-wrapper">
          <div className="hello-text-wrapper">
            <span className="hello-text">Hello</span>,
          </div>
          <br />
          <span className="main-name-wrapper">My name is Rushikesh</span>
        </div>
      </div>
      <div className="image-section"></div>
    </div>
  );
};

export default Hero;
