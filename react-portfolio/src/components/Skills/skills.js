// Skills.js
import React from "react";
import CircleProgressBar from './CircleProgressBar.js';
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>
        <div className="row skills-content">
          <div className="col-lg-6 order-lg-last">
            {/* Linear Progress Bars - Right Side */}
            <div className="progress">
              {/* Include your linear progress bar components here */}
            </div>
          </div>

          <div className="col-lg-6 order-lg-first">
            {/* Circular Progress Bars - Left Side */}
            <CircleProgressBar skill="Python" percentage={90} />
            <CircleProgressBar skill="Java" percentage={80} />
            <CircleProgressBar skill="C#" percentage={75} />
            <CircleProgressBar skill="Node JS" percentage={70} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
