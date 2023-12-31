import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import reactLogo from './assets/picture.jpg'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand logo and name */}
        <a className="navbar-brand" href="#">
          <img src={reactLogo} alt="Brand Logo" width="30" height="30" className="d-inline-block align-top" />
          WINDEV.
        </a>

        {/* Toggle switch for dark mode */}
        <div className="form-check form-switch ms-auto">
          <input className="form-check-input" type="checkbox" id="darkModeSwitch" />
          <label className="form-check-label" htmlFor="darkModeSwitch">Dark Mode</label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
