import { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [navSelected, setNavSelected] = useState("");

  return (
    <div className="navigation-wrapper">
      <div className="navigation">
        <ul className="navigation-list">
          <li
            className="navigation-item"
            onClick={() => setNavSelected("Home")}
            style={{ transform: navSelected === "Home" && "translateX(25px)" }}
          >
            Home
          </li>
          <li
            className="navigation-item"
            onClick={() => setNavSelected("Work")}
            style={{ transform: navSelected === "Work" && "translateX(25px)" }}
          >
            Work
          </li>
          <li
            className="navigation-item"
            onClick={() => setNavSelected("Resume")}
            style={{
              transform: navSelected === "Resume" && "translateX(25px)",
            }}
          >
            Resume
          </li>
          <li
            className="navigation-item"
            onClick={() => setNavSelected("Contact")}
            style={{
              transform: navSelected === "Contact" && "translateX(25px)",
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
