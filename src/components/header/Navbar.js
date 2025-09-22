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
                Products
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
              <p className="nav-name feature" style={{ padding: 5 }}>
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
              <div className="product-bg">
              
                <ul class="header-prodlink">
              <li>
                <a href="/screen-time-report/" target="_blank">
                  <div class="a-left">
                    <div class="logo-icon">
                      <img loading="lazy" src="https://images.famiguard.com/famiguarden/assets/common/screen-time-feature.svg" alt="Screen Time"/>
                    </div>
                    <div class="products_text">
                      <div class="products_text_top">
                        <b>Screen Time</b>
                      </div>
                    </div>
                  </div>
                  <div class="a-right">
        
                  </div>
                </a>
              </li>
              <li>
                <a href="/screen-time-report/" target="_blank">
                  <div class="a-left">
                    <div class="logo-icon">
                      <img loading="lazy" src="https://images.famiguard.com/famiguarden/assets/common/screen-time-feature.svg" alt="Screen Time"/>
                    </div>
                    <div class="products_text">
                      <div class="products_text_top">
                        <b>Block App</b>
                      </div>
                    </div>
                  </div>
                  <div class="a-right">
        
                  </div>
                </a>
              </li>
              <li>
                <a href="/screen-time-report/" target="_blank">
                  <div class="a-left">
                    <div class="logo-icon">
                      <img loading="lazy" src="https://images.famiguard.com/famiguarden/assets/common/screen-time-feature.svg" alt="Screen Time"/>
                    </div>
                    <div class="products_text">
                      <div class="products_text_top">
                        <b>Block website</b>
                      </div>
                    </div>
                  </div>
                  <div class="a-right">
        
                  </div>
                </a>
              </li>
              <li>
                <a href="/screen-time-report/" target="_blank">
                  <div class="a-left">
                    <div class="logo-icon">
                      <img loading="lazy" src="https://images.famiguard.com/famiguarden/assets/common/screen-time-feature.svg" alt="Screen Time"/>
                    </div>
                    <div class="products_text">
                      <div class="products_text_top">
                        <b>Location Tracker</b>
                      </div>
                    </div>
                  </div>
                  <div class="a-right">
        
                  </div>
                </a>
              </li>
              <li>
                <a href="/screen-time-report/" target="_blank">
                  <div class="a-left">
                    <div class="logo-icon">
                      <img loading="lazy" src="https://images.famiguard.com/famiguarden/assets/common/screen-time-feature.svg" alt="Screen Time"/>
                    </div>
                    <div class="products_text">
                      <div class="products_text_top">
                        <b>Call History</b>
                      </div>
                    </div>
                  </div>
                  <div class="a-right">
        
                  </div>
                </a>
              </li>
              <li>
                <a href="/social-media-monitor/" target="_blank">
                  <div class="a-left">
                    <div class="logo-icon">
                      <img loading="lazy" src="https://images.famiguard.com/famiguarden/assets/common/media-feature.svg" alt="Social Media Monitor" />
                    </div>
                    <div class="products_text">
                      <div class="products_text_top">
                        <b>Social Media Monitor</b>
                      </div>
                    </div>
                  </div>
                  <div class="a-right">
  
                  </div>
                </a>
              </li>
  
            </ul>
               
              </div>

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

            <Link
              to="/support-center"
              className="nav-link"
              onClick={closeMenu}
            >
              <p className="nav-name" style={{ padding: 5 }}>
                Support
  
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
