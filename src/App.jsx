import { Fragment, useState } from "react";

import "./App.css";

// pages import
import Homepage from "./pages/Homepage";

function App() {
  const [mainSlider, setMainSlider] = useState(false);
  return (
    <Fragment>
      <img
        src="/icons/plus-icon.svg"
        onClick={() => setMainSlider(!mainSlider)}
        className="navigation-icon"
        style={{ transform: mainSlider && "rotate(135deg)" }}
      />

      <Homepage mainSlider={mainSlider} />
    </Fragment>
  );
}

export default App;
