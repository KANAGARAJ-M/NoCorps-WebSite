import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">NoCorps</Link>
      </div>

      <div 
        className={`menu-toggle ${menuOpen ? "open" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/services", label: "Services" },
          { path: "/products", label: "Products" },
          { path: "/policies", label: "Policies" },
          { path: "/contact-form", label: "Contact Us" }
        ].map(({ path, label }) => (
          <li key={path}>
            <Link 
              to={path} 
              onClick={closeMenu}
              className={location.pathname === path ? 'active' : ''}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
