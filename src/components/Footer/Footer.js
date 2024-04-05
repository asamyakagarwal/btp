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
          <a href="#feedback" className="footer-link">Feedback</a>
          <a href="#contact" className="footer-link">Contact Us</a>
          <a href="#expert" className="footer-link">Expert</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
