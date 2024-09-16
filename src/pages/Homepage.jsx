import { Fragment } from "react";

import "./Homepage.css";

// pages import
import Navigation from "../components/navigation/Navigation";
import Main from "../components/main/Main";

const Homepage = ({ mainSlider }) => {
  return (
    <Fragment>
      <div className="content-wrapper">
        <Navigation />
        <Main mainSlider={mainSlider} />
      </div>
    </Fragment>
  );
};

export default Homepage;
