import React, { useState } from "react";
import "../css/Navbar.css"; // Import the CSS file for styling
import { Link } from "react-router-dom"; // If using React Router

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">NoCorps</div>

      {/* Mobile Menu Button */}
      <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/policies" onClick={closeMenu}>Policies</Link></li>
        <li><Link to="/Contact/form" onClick={closeMenu}>Contact Us</Link></li>
        {/* <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_Pz0O0XFOlkRlwp" async> </script> </form> */}
      </ul>
    </nav>
  );
};

export default Navbar;
