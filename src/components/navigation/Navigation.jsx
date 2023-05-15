import { useEffect, useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [navSelected, setNavSelected] = useState("");

  useEffect(() => {
    const navigationWrapper =
      document.getElementById("navigation-wrapper").classList;

    const classHandler = (value) => {
      navigationWrapper.forEach((classEl) => {
        if (classEl !== "navigation-wrapper") {
          navigationWrapper.remove(classEl);
          navigationWrapper.add(value);
        }
      });
    };

    if (navSelected === "Home" || navSelected === "") {
      if (navigationWrapper.length === 1) {
        navigationWrapper.add("Home");
      } else {
        classHandler("Home");
      }
    } else if (navSelected === "Work") {
      if (navigationWrapper.length === 1) {
        navigationWrapper.add("Work");
      } else {
        classHandler("Work");
      }
    } else if (navSelected === "Resume") {
      if (navigationWrapper.length === 1) {
        navigationWrapper.add("Resume");
      } else {
        classHandler("Resume");
      }
    } else if (navSelected === "Contact") {
      if (navigationWrapper.length === 1) {
        navigationWrapper.add("Contact");
      } else {
        classHandler("Contact");
      }
    }
  }, [navSelected]);

  return (
    <div id="navigation-wrapper" className="navigation-wrapper">
      <div className="navigation">
        <ul className="navigation-list">
          <li
            className="navigation-item"
            onClick={() => setNavSelected("Home")}
            style={{ transform: navSelected === "Home" && "translateX(25px)" }}
          >
            <span> Home</span>
          </li>
          <li
            className="navigation-item"
            onClick={() => setNavSelected("Work")}
            style={{ transform: navSelected === "Work" && "translateX(25px)" }}
          >
            <span> Work</span>
          </li>
          <li
            className="navigation-item"
            onClick={() => setNavSelected("Resume")}
            style={{
              transform: navSelected === "Resume" && "translateX(25px)",
            }}
          >
            <span>Resume</span>
          </li>
          <li
            className="navigation-item"
            onClick={() => setNavSelected("Contact")}
            style={{
              transform: navSelected === "Contact" && "translateX(25px)",
            }}
          >
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
