import "./Hambuger.css";

function Hambuger({ mainSlider, setMainSlider }) {
  return (
    <nav onClick={() => setMainSlider(!mainSlider)}>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Hambuger;
