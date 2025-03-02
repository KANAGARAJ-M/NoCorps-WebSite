import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebook, 
  FaTwitter, 
  FaTelegram, 
  FaInstagram, 
  FaDiscord, 
  FaYoutube,
  FaEnvelope,
  FaPhone 
} from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  const socialLinks = [
    { icon: FaYoutube, url: "https://www.youtube.com/@AicNocorps", label: "YouTube" },
    { icon: FaFacebook, url: "https://www.facebook.com/nocorpsdev/", label: "Facebook" },
    { icon: FaTwitter, url: "https://x.com/nocorps_dev", label: "Twitter NoCorps" },
    { icon: FaTwitter, url: "https://x.com/AIC_NC", label: "Twitter AIC" },
    { icon: FaDiscord, url: "https://discord.gg/5guaasUc", label: "Discord 1" },
    { icon: FaDiscord, url: "https://discord.gg/679h8epu", label: "Discord 2" },
    { icon: FaInstagram, url: "https://www.instagram.com/nocorps/", label: "Instagram" },
    { icon: FaTelegram, url: "https://t.me/aiccoin_community", label: "Telegram" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <a href="mailto:kanagaraj.developer@gmail.com" className="contact-link">
              <FaEnvelope /> kanagaraj.developer@gmail.com
            </a>
            <a href="tel:+919500434845" className="contact-link">
              <FaPhone /> +91 9500x xxxxx
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/Contact/form">Contact</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <div className="footer-links">
            <Link to="/policies">Policies</Link>
            <Link to="/web/NoCorps/privacy-policy">Privacy Policy</Link>
            <Link to="/web/NoCorps/t&c">Terms & Conditions</Link>
            <Link to="/web/NoCorps/cookie-policy">Cookie Policy</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NoCorps.org All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;