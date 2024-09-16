import { Fragment, useState } from "react";

import "./App.css";

// pages import
import Homepage from "./pages/Homepage";
import Hambuger from "./components/hambuger/Hambuger";

function App() {
  const [mainSlider, setMainSlider] = useState(false);
  return (
    <Fragment>
      <Hambuger mainSlider={mainSlider} setMainSlider={setMainSlider} />
      <Homepage mainSlider={mainSlider} />
    </Fragment>
  );
}

export default App;
