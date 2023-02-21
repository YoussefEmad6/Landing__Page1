import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMosquito, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
          <li>
            <Link className="nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="contact">
              Contact
            </Link>
          </li>
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
