import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-light text-dark p-4">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <h3>WINDEV.</h3>
            <ul className="list-unstyled">
              <li><i className="bi bi-telephone"></i> +639455470078</li>
              <li><i className="bi bi-geo-alt-fill"></i> Poblacion, San Ramon, Bayawan City, Neg Or. Visayas</li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <h5>Connect with us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://web.facebook.com/windeltortuganavales" className="text-primary"><i className="bi bi-facebook"></i></a></li>
              <li className="list-inline-item"><a href="mailto:hecksyou889@gmail.com" className="text-primary"><i className="bi bi-envelope"></i></a></li>
              <li className="list-inline-item"><a href="https://github.com/GitAddWindel" className="text-primary"><i className="bi bi-github"></i></a></li>
            </ul>
          </div>
          <div className="col-md-4 text-end">
            <p>&copy; {new Date().getFullYear()} WINDEV. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
