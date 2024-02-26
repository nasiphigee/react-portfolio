import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="img-container">
        <img
          className="img-about"
          alt="Nasiphi"
          src="./src/assets/images/AboutMe.png"
        />
      </div>
      <div className="overlap-2">
        <h3 className="resume-title">About Me</h3>
        <div className="resume-item pb-0">
          <h4>I'm Nasiphi Gwija</h4>
          <p>
            <em>
              I'm a software developer with a passion for crafting digital experiences
              that are not only functional but also delightful. My coding journey began
              with the excitement of creating my first 'Hello World' program, and it
              has since evolved into a love affair with both front-end and back-end
              technologies.
            </em>
          </p>
          <div className="education-experience">
            <div className="education">
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
              <i className="fa-solid fa-calendar-days"></i>
                <h5>2014-2017</h5>
                <h4>BSc in IT @ Richield Graduate Institute of technology</h4>
                <p>
                  My academic journey has equipped me with a strong foundation
                  in IT principles and a deep expertise in Software Dev.
                </p>
              </div>
              <div className="resume-item">
              <i className="fa-solid fa-calendar-days"></i>
                <h5>2012-2013</h5>
                <h4>Matric</h4>
                <p>
                  This educational background reflects my strong foundation in
                  quantitative reasoning, scientific principles, and geographical
                  knowledge. It has not only instilled problem-solving skills but
                  also a deep understanding of the natural world and our
                  environment.
                </p>
              </div>
            </div>
            <div className="professional-experience">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
              <i className="fa-solid fa-calendar-days"></i>
                <h5>2024 - Present</h5>
                <h4>Junior Software Developer @ ABSA</h4>
                <p>
                  In my current role, I am part of a dynamic team where I
                  contribute in developing web applications, working on APIs, I
                  am particularly passionate about frontend development and I'm
                  actively seeking opportunities to grow in this area.
                </p>
              </div>
              <div className="resume-item">
              <i className="fa-solid fa-calendar-days"></i>
                <h5>2023-2024</h5>
                <h4>Full Stack Dev Learnership @ Uvu Africa</h4>
                <p>
                  Specializing in web and software development. Proficient in
                  front and back-end technologies, Explore my portfolio to my
                  diverse range of projects & expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
