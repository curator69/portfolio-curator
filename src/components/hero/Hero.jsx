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
        <div className="text-section-wrapper">
          <div className="hello-text-wrapper">
            <span className="hello-text">Hello</span>,
          </div>
          <br />
          <span className="main-name-wrapper">
            My name is <code>Rushikesh</code>
          </span>
          <br />
          <span className="job-title">
            Your friendly neighbourhood front-end developer!
          </span>
        </div>
      </div>
      <div className="image-section"></div>
    </div>
  );
};

export default Hero;
