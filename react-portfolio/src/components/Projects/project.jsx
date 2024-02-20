import React from 'react';
import './project.css';

const Projects = () => {
  return (
    <div>
    <h1 className="projects-heading">My Projects</h1>
    <div className="projects-container">
      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <img
              src="/src/assets/images/taxcal.jpg"
              alt="Project Image"
            />
          </div>

          {/* Back Side */}
          <div className="card-back">
            <p>
              This website sells men's cloth products and helps men look their best.
              </p>
              <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://discord.gg/your-discord-invite" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-discord"></i> Discord
                  </a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <img
              src="src/assets/images/FirstKnight.png"
              alt="Project Image"
            />
          </div>

          {/* Back Side */}
          <div className="card-back">
            <p>
              Description of Project 2 goes here.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <img
              src="src/assets/images/Portfolio.png"
              alt="Project Image"
            />
          </div>

          {/* Back Side */}
          <div className="card-back">
            <p>
              This website sells men's cloth products and helps men look their best.
              </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <img
              src="src/assets/images/5Stars.png"
              alt="Project Image"
            />
          </div>

          {/* Back Side */}
          <div className="card-back">
            <p>
            Carrer guide website that was build using HTML,Css, JavaScript and Node JS for back end.
              </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <img
              src="src/assets/images/bank.jpeg"
              alt="Project Image"
            />
          </div>

          {/* Back Side */}
          <div className="card-back">
            <p>
              This website sells men's cloth products and helps men look their best.
              </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <img
              src="src/assets/images/conveter.jpeg"
              alt="Project Image"
            />
          </div>

          {/* Back Side */}
          <div className="card-back">
            <p>
              This website sells men's cloth products and helps men look their best.
              </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
