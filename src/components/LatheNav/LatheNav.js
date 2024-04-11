import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./LatheNav.css";

const LatheNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">

      <div className="hamburger" onClick={toggleNav}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div className={`nav__link2 ${isNavOpen ? '' : 'hide'}`}>
        <Link className='lathe-' >Operations</Link>
        <Link className='lathe-' >Types</Link>
        <Link className='lathe-' >Accessories</Link>
        <Link className='lathe-' >Cutting Fluids</Link>
        <Link className='lathe-' >Cutting Tools</Link>
        <Link className='lathe-' >Parameters</Link>
      </div>
    </nav>
  );
};

export default LatheNav;