import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="containerhead">
        <div>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={closeMenu}
          >
            <img className="logosize" src="/images/tj.png" alt="no images"/>
          </Link>
        </div>

        {/* Hamburger icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className={location.pathname === "/jobs" ? "active" : ""}
                onClick={closeMenu}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/companies"
                className={location.pathname === "/companies" ? "active" : ""}
                onClick={closeMenu}
              >
                Companies
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* <div className="auth-buttons">
          <button className="register-btn">To Know more</button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
