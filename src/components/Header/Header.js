import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="containerhead">
        <div className="logo-container">
          <Link to="/" onClick={closeMenu}>
            <img className="logosize" src="/images/tj.png" alt="TalentJobs Logo" />
            {/* <span className="logo-text">TalentJobs</span> */}
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                onClick={closeMenu}
              >
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className={location.pathname === "/jobs" ? "active" : ""}
                onClick={closeMenu}
              >
                <i className="fas fa-briefcase"></i> Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/companies"
                className={location.pathname === "/companies" ? "active" : ""}
                onClick={closeMenu}
              >
                <i className="fas fa-building"></i> Companies
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className={location.pathname === "/resources" ? "active" : ""}
                onClick={closeMenu}
              >
                <i className="fas fa-book"></i> Resources
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
                onClick={closeMenu}
              >
                <i className="fas fa-info-circle"></i> About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Auth buttons */}
        {/* <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
          <Link to="/register" className="register-btn">
            <i className="fas fa-user-plus"></i> Register
          </Link>
        </div> */}

        {/* Mobile menu toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={menuOpen ? "hamburger open" : "hamburger"}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;