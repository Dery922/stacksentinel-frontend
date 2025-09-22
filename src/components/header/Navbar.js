import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSignInAlt,
  FaUserPlus,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import "./style.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-brand">
          <Link to="/" onClick={closeMenu}>
            <img
              className="logo"
              src="/assets/logo1.svg"
              alt="Parental Control Logo"
            />
          </Link>
        </div>

        <nav className={`header-nav ${showMenu ? "show" : ""}`}>
          <div className="nav-links">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              <p className="nav-name" style={{ padding: 5 }}>
                Tracker
                <svg
                  className="header-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="currentColor"
                >
                  <path d="M1 3l5.5 5L12 3" />
                </svg>
              </p>
            </Link>
            <Link to="/keylogger" className="nav-link" onClick={closeMenu}>
              <p className="nav-name" style={{ padding: 5 }}>
                Keylogger
                <svg
                  className="header-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="currentColor"
                >
                  <path d="M1 3l5.5 5L12 3" />
                </svg>
              </p>
            </Link>
            <Link
              to="/about"
              className="nav-link has-dropdown"
              onClick={closeMenu}
            >
              <p className="nav-name" style={{ padding: "5px" }}>
                Features
                <svg
                  className="header-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="currentColor"
                >
                  <path d="M1 3l5.5 5L12 3" />
                </svg>
              </p>
            </Link>
            <Link to="/goals" className="nav-link" onClick={closeMenu}>
              <p className="nav-name" style={{ padding: 5 }}>
                Goals
                <svg
                  className="header-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="currentColor"
                >
                  <path d="M1 3l5.5 5L12 3" />
                </svg>
              </p>
            </Link>
            <Link
              to="/store"
              className="nav-link highlight"
              onClick={closeMenu}
            >
              Store
            </Link>
            <Link
              to="/ethical-hacking"
              className="nav-link"
              onClick={closeMenu}
            >
              <p className="nav-name" style={{ padding: 5 }}>
                Ethical Hacking
                <svg
                  className="header-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="currentColor"
                >
                  <path d="M1 3l5.5 5L12 3" />
                </svg>
              </p>
            </Link>

            <Link className="nav-link" onClick={closeMenu}></Link>
          </div>

          <div className="nav-actions">
            <Link to="/register" className="nav-btn outline">
              <FaUserPlus /> <span>Register</span>
            </Link>
            <Link to="/login" className="nav-btn outline">
              <FaSignInAlt /> <span>Login</span>
            </Link>
          </div>
        </nav>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
