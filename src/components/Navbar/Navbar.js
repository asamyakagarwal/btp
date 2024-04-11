import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/new_logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsDropdownOpen(false); // Close dropdown when toggling navigation
  };

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="nav">
      <img src={logo} className="logo"/>

      <div className="hamburger" onClick={toggleNav}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div className={`nav__link ${isNavOpen ? '' : 'hide'}`} onMouseLeave={closeDropdown}>
        <Link to="/">Home</Link>
        <Link onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>Types</Link>
        {/* Dropdown Menu for Types */}
        {(isDropdownOpen || isNavOpen) && (
          <ul className="dropdown-menu" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <li><Link to="/lathe">Lathe Machine</Link></li>
            <li><Link to="/machine2">Machine 2</Link></li>
            <li><Link to="/machine3">Machine 3</Link></li>
            {/* Add more machine links as needed */}
          </ul>
        )}
        {/* End of Dropdown Menu */}
        <Link to="/news">News</Link>
        <Link to="/expert">Expert-System</Link>
        <Link to="/contact-page">FeedBack</Link>
        <Link to="/login">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;










