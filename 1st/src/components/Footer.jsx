import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

      
        <div className="footer-left">
          <h2>Friends & Dhurve</h2>
          <p>
            Friends & Dhurve is a modern e-commerce experience built with passion,
            creativity, and simplicity. We focus on delivering stylish products
            with smooth and user-friendly shopping experience.
          </p>
        </div>

       
        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#collections">Collections</a>
          <a href="#about">About Us</a>
        </div>

   
        <div className="footer-links">
          <h4>SUPPORT</h4>
          <a href="#contact">Contact</a>
          <a href="#faq">FAQ</a>
          <a href="#shipping">Shipping</a>
          <a href="#returns">Returns</a>
        </div>

      
        <div className="footer-icons">
          <a href="https://github.com">
            <FaGithub />
          </a>

          <a href="https://instagram.com">
            <FaInstagram />
          </a>

          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          Contact: friends&dhurve@gmail.com | +91 00000 00000
        </p>

        <p style={{ marginTop: "10px" }}>
          Thank you for visiting Friends & Dhurve ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;