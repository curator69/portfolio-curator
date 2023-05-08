import { Fragment } from "react";

import "./App.css";

// pages import
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Fragment>
      <img src="/public/icons/plus-icon.svg" className="navigation-icon" />
      <Homepage />
    </Fragment>
  );
}

export default App;
