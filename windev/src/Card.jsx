import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import frontend from './assets/frontend.png';
import backend from './assets/backend.png';
import tools from './assets/tools.png';

function Card() {
  return (
    <div className="container mt-5">
        <h2 className='header-text text-center'>Tech Stack</h2>
        <small className='fw-lighter text-center d-block mx-auto'>
            A Glimpse into My Coding Toolkit
    </small>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <img src={frontend} alt="frontend pic" className="card-img-top mt-2" />
            <div className="card-body">
              <p className="card-text text-center fw-bolder">Frontend</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <img src={backend} alt="backend pic" className="card-img-top mt-2" />
            <div className="card-body">
              <p className="card-text text-center fw-bolder">Backend</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <img src={tools} alt="tools pic" className="card-img-top mt-2" />
            <div className="card-body">
              <p className="card-text text-center fw-bolder">Tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
