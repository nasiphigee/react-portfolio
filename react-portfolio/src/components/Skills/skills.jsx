// Skills.js
import React from "react"
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
              <span className="skill">HTML <i className="val">98%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: "98%" }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">PHP <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: "75%" }}></div>
              </div>
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
