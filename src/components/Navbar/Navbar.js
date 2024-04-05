import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="nav">
      <a href="/" className="logo">logo</a>

      <div className="hamburger" onClick={toggleNav}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div className={`nav__link ${isNavOpen ? '' : 'hide'}`}>
        <Link to="/">Home</Link>
        <Link to="/types">Types</Link>
        <Link to="/news">News</Link>
        <Link to="/expert">ChatGpt</Link>
        <Link to="/contact-page">FeedBack</Link>
        <Link to="/login">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;




