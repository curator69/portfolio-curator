import { Fragment } from "react";

import "./Homepage.css";

// pages import
import Navigation from "../components/navigation/Navigation";
import Main from "../components/main/Main";

const Homepage = () => {
  return (
    <Fragment>
      <div className="content-wrapper">
        <Navigation />
        {/* <Main /> */}
      </div>
    </Fragment>
  );
};

export default Homepage;
