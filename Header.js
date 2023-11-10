// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header >
      <div className="container">
        <div className="content">
          <img src="./assets/logo.svg" alt="Logo" />
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="./About.js">About</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;