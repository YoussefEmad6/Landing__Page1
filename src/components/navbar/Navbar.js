import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMosquito, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <FontAwesomeIcon icon={faMosquito} className="icon" />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">Home</li>
          <li className="nav-item">Pricing</li>
          <li className="nav-item">FAQ</li>
          <li className="nav-item">Contact</li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon
              icon={faXmark}
              size={"xl"}
              style={{ color: "#ffffff" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size={"xl"}
              style={{ color: "#ffffff" }}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
