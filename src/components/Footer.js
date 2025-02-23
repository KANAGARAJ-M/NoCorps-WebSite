import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaTelegram, FaInstagram, FaDiscord } from "react-icons/fa";
// import "./Footer.css"; // Import the CSS file
import "../css/Footer.css"
// import RazorpayButton from "./Support";

const Footer = () => {
    return (
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.section}>
            <h3>Company</h3>
            <Link to="/about" className="hover-link">About Us</Link>
            <Link to="/services" className="hover-link">Services</Link>
            <Link to="/products" className="hover-link">Products</Link>
            <Link to="/Contact/form" className="hover-link">Contact</Link>
          </div>
  
          <div style={styles.section}>
            <h3>Legal</h3>
            <Link to="/policies" className="hover-link">Policies</Link>
            <Link to="/web/NoCorps/privacy-policy" className="hover-link">Privacy Policy</Link>
            <Link to="/web/NoCorps/t&c" className="hover-link">Terms & Conditions</Link>
            <Link to="/web/NoCorps/cookie-policy" className="hover-link">Cookie Policy</Link>
          </div>

          <div>
            <h3>Support</h3>
            {/* <RazorpayButton/> */}
          </div>
  
          <div style={styles.section}>
            <h3>Follow Us</h3>
            <div style={styles.socialIcons}>
              <a href="https://www.facebook.com/nocorpsdev/" target="_blank" rel="noopener noreferrer" className="hover-icon">
                <FaFacebook />
              </a>
              <a href="https://x.com/nocorps_dev" target="_blank" rel="noopener noreferrer" className="hover-icon">
                <FaTwitter />
              </a>
              <a href="https://discord.gg/5guaasUc" target="_blank" rel="noopener noreferrer" className="hover-icon">
                <FaDiscord />
              </a>
              <a href="https://discord.gg/679h8epu" target="_blank" rel="noopener noreferrer" className="hover-icon">
                <FaDiscord />
              </a>
              <a href="https://www.instagram.com/nocorps/" target="_blank" rel="noopener noreferrer" className="hover-icon">
                <FaInstagram />
              </a>
              <a href="https://t.me/aiccoin_community" target="_blank" rel="noopener noreferrer" className="hover-icon">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
  
        <div style={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} NoCorps.org All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  const styles = {
    footer: {
      background: "linear-gradient(135deg, #1a1a1a, #444)",
      color: "white",
      padding: "40px 0",
      textAlign: "center",
      boxShadow: "0px -4px 20px rgba(0, 0, 0, 0.7)",
      borderTop: "2px solid rgba(255, 255, 255, 0.3)",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "0 50px",
    },
    section: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      fontSize: "16px",
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
    },
    bottom: {
      marginTop: "20px",
      fontSize: "24px",
      opacity: "0.5",
    },
  };
  
  export default Footer;