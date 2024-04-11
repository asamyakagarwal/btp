// Footer.js

import React from 'react';
import './Footer.css'; // Import the Footer.css file
import { useNavigate } from 'react-router-dom';


function Footer() {

const navigation = useNavigate() ;    // important concept used here 

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">All rights reserved &copy; 2024</p>
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#contact" className="footer-link">Contact Us</a>
          <a href="#feedback" className="footer-link">Feedback</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
