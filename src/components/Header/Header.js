import React from 'react';
import './Header.css'; // Import your CSS file

const Header = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="quote">
        "One man's 'magic' is another man's engineering."
        </div>
        <div className="additional-content">
        - Robert A. Heinlein
        </div>
      </div>
    </div>
  );
};

export default Header;
