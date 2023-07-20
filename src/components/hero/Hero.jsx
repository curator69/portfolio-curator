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

  return (
    <div
      className="hero-wrapper"
      style={{ borderTopLeftRadius: mainSlider && "50px" }}
    >
      <div className="text-section"></div>
      <div className="image-section"></div>
    </div>
  );
};

export default Hero;
