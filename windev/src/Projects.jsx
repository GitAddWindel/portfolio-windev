import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sims from './assets/SIMS.mp4';

function Projects() {
  const projectData = [
    {
      id: 1,
      title: 'Student Information Management System',
      description:
        'This system is built using the programming language PHP, Vanilla JS, and the frontend languages like HTML, CSS, Bootstrap UI Framework, and MySQL for the database.',
      videoUrl: sims, 
    },
    {
      id: 2,
      title: 'SG NATIONAL OFFICERS LOGBOOK SYSTEM',
      description:
        'This system is built using the programming language PHP, Vanilla JS, and the frontend languages like HTML, CSS, TailWindCSS, jQuery, and MySQL for the database.',
      videoUrl: 'https://www.youtube.com/embed/8qJ8bmSBnP4?mute=1',
    },
    {
        id: 3,
        title: 'LIBRARY SYSTEM WEB - BASED - VANILLA JS',
        description:
          'This system is built using the programming language Vanilla Javascript and other languages like HTML, CSS. Click the video to watch the finished project.',
        videoUrl: 'https://www.youtube.com/embed/FvEfKg1kSD4?mute=1',
  
      },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Finished Projects</h2>
      <small className='fw-lighter text-center d-block mx-auto'>
            A Glimpse into My Finished Projects System
    </small>

      <div className="row">
        {projectData.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card">
              <iframe
                title={`Project ${project.id}`}
                width="100%"
                height="200"
                src={project.videoUrl}
                frameBorder="0"
                allowFullScreen
                muted={true}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
