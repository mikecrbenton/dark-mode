import React, { useState } from 'react';
//import useDarkMode from '../hooks/useDarkMode';

const Navbar = ( {darkMode, toggleMode} ) => {

   // darkMode was not defined in Index.js - MOVED TO TOP LEVEL
   //   const [darkMode, setDarkMode] = useDarkMode(false);
   //   const toggleMode = e => {
   //     e.preventDefault();
   //     setDarkMode(!darkMode);
   //   };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
