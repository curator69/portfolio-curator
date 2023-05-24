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
      <div className="text-section">
        <div className="hello-word-wrapper">
          <div className="hello-word">{helloArr[0]},</div>
          <span className="hii-emoji">👋</span>
        </div>
        <div className="name-wrapper">
          <div className="name">My name is</div>
          <div className="actual-name">Rushikesh</div>
        </div>
        <div className="description">
          Your friendly neighbourhood front-end developer!
        </div>
      </div>
      <div className="image-section"></div>
    </div>
  );
};

export default Hero;
