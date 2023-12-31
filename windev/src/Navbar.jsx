import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import reactLogo from './assets/picture.jpg';
import sun from './assets/sun.png';
import moon from './assets/moon.png';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#343a40' : '#ffffff';
    document.body.style.color = darkMode ? '#ffffff' : '#000000';
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          <img src={reactLogo} alt="Portfolio Logo" width="30" height="30" className="d-inline-block align-top rounded-circle" />
          <span className={`ms-2 fw-bolder ${darkMode ? 'text-white' : 'text-dark'}`}>WINDEV.</span>
        </div>
        <div className="form-check form-switch ms-auto">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            {darkMode ? <img className="moon-image" src={moon} alt="Moon" /> : <img className="sun-image" src={sun} alt="Sun" />}
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
