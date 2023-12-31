import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import windelImage from './assets/picture.jpg';

function Intro() {
  const [text, setText] = useState('');
  const jobTitle = 'Full-stack Developer';

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setText(jobTitle.substring(0, index));
      index++;

      if (index > jobTitle.length) {
        // setText('');
        index = 0;
      }
    }, 100); 

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let typewriterInterval;

    const startTypewriter = () => {
      typewriterInterval = setInterval(() => {
        setText((prevText) => {
          const nextIndex = (prevText.length % jobTitle.length) + 1;
          return jobTitle.substring(0, nextIndex);
        });
      }, 100); 
    };

    const stopTypewriter = () => clearInterval(typewriterInterval);

    startTypewriter();

    return () => stopTypewriter();
  }, [jobTitle]);

  return (
    <div className="container my-5 d-flex align-items-center">
      <div className="col-md-6">
        <div className="content">
          <h1 className='text-primary fs-5'>Hello,</h1>
          <h2 className='fw-bolder fs-1'>I'm Windel Navales</h2>
          <h5 className='fs-6 font-monospace text-primary'>{text}</h5>
          <p>
          Currently immersed in the world of knowledge at Negros Oriental State University, specializing in Computer Technology. Within the realm of programming, I embrace the journey with humility, enthusiasm, and a genuine approachability. My eagerness to learn and adapt fuels my passion for this dynamic field. Let's embark on this coding adventure together! 
          </p>
          <button className="btn btn-primary"><i className='bi bi-download'></i> Download CV</button>
        </div>
      </div>
      <div className="col-md-6">
        <img
          src={windelImage}
          alt="Windel Navales"
          className="d-inline-block align-top img-fluid h-0 w-100 border-danger border border-5"
          style={{ borderRadius: '100%' }}
        />
      </div>
    </div>
  );
}

export default Intro;
