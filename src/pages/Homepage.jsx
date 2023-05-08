import { Fragment } from "react";

// pages import
import Navigation from "../components/navigation/Navigation";
import Main from "../components/main/Main";

const Homepage = () => {
  return (
    <Fragment>
      <Navigation />
      <Main />
    </Fragment>
  );
};

export default Homepage;
