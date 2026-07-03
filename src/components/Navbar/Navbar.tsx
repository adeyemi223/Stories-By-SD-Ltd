import "./Navbar.css";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <header className="header">
        <div className="container">
          <Link to={"/"}>
            <img src={Logo} alt="Stories-By-SD Ltd" className="Logo" />
          </Link>

          <nav className="desktop_nav">
            <ul role="list" className="desktop_nav_list">
              <li>
                <Link to={"/"} className="Link">
                  Services
                </Link>
              </li>
              <li>
                <Link to={"/work"} className="Link">
                  Work
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="Link">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/impact"} className="Link">
                  Impact
                </Link>
              </li>
              <li>
                <Link to={"/blog"} className="Link">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <Link to={"/contact"} className="desktop_btn_wrapper">
            <button className="button btn">
              <span>Get in touch</span>
            </button>
          </Link>

          <button
            className={`menu ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div
        className={`backdrop ${isMenuOpen ? "visible" : ""}`}
        onClick={closeMenu}
      />

      <nav className={`mobile_nav ${isMenuOpen ? "open" : ""}`}>
        <ul role="list" className="Navlist">
          <li style={{ "--i": 1 } as React.CSSProperties}>
            <Link to={"/"} className="Link" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li style={{ "--i": 2 } as React.CSSProperties}>
            <Link to={"/work"} className="Link" onClick={closeMenu}>
              Work
            </Link>
          </li>
          <li style={{ "--i": 3 } as React.CSSProperties}>
            <Link to={"/about"} className="Link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li style={{ "--i": 4 } as React.CSSProperties}>
            <Link to={"/impact"} className="Link" onClick={closeMenu}>
              Impact
            </Link>
          </li>
          <li style={{ "--i": 5 } as React.CSSProperties}>
            <Link to={"/blog"} className="Link" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li className="mobile_menu" style={{ "--i": 6 } as React.CSSProperties}>
            <Link to="/contact" onClick={closeMenu}>
              <button className="menu_btn">
                <span>Get in touch</span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
