import React from 'react';
import './project.css';
import taxcal from "/src/assets/images/taxcal.jpg";
import firstknight from "/src/assets/images/firstknight.png";
import portfolio from "/src/assets/images/portfolio.png";
import fivestars from "/src/assets/images/fivestars.png";
import bank from "/src/assets/images/bank.jpeg";
import conveter from "../../assets/images/conveter.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="projects-name">
    <h3>My Projects</h3>
    <div id="projects" className="projects-container">
            <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <img
               src={taxcal} alt="Tax calculator" />
  
          </div>

          {/* Back Side */}
          <div className="card-back">
            <p> This application was meticulously crafted using Java to deliver 
              precise and efficient tax and rebate calculations. Its robust functionalit ensures accuracy in 
              financial computations, providing users with a reliable tool for navigating complex tax scenarios. </p>
              <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> 
                </a>
                
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <img
             src={firstknight} alt="The First Knight Web" />

          </div>

          {/* Back Side */}
          <div className="card-back">
            <p>
            Introducing The First Knight's dynamic website – 
            a bespoke platform meticulously designed to elevate actors to the spotlight.
             Powered by HTML, CSS, and Javascript, this online hub seamlessly promotes our talented roster.</p>
            <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> 
                </a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <img
            src={portfolio} alt="My Portfolio" />

          </div>

          {/* Back Side */}
          <div className="card-back">
            <p>a dynamic showcase of my expertis crafted with HTML, CSS, and Javascript. 
              Explore my projects with interactive features, discover my skills, and connect for opportunities. 
              Responsive design ensures a seamless experience across devices.</p>
            <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> 
                </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <img
            src={fivestars} alt="Carrer Guide" />
          </div>

          {/* Back Side */}
          <div className="card-back">
            <p>Presenting a collaborative triumph – our Career Guide website seamlessly integrates HTML, 
              CSS, JavaScript, and Node.js for a comprehensive user experience. With an innovative blend of 
              technology, we've not only curated essential career resources but also introduced an engaging game and an events page.
              </p>
              <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> 
                </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <img
            src={bank} alt="bankingapp" />
          </div>

          {/* Back Side */}
          <div className="card-back">
         <p>Our cutting-edge Bank App, meticulously engineered using Python to redefine the banking experience. 
         Designed with customer convenience in mind, this app provides seamless deposit and withdrawal functionalities, 
         complemented by a detailed transaction log for impeccable financial tracking.</p>             
          <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> 
                </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <img
          src={conveter} alt="Conveter matrics" />
          </div>

          {/* Back Side */}
          <div className="card-back">
            <p>his application, skillfully developed in Java, serves as a robust unit conversion tool. 
              Specifically designed to enhance user convenience, it excels in seamlessly transforming units, 
              exemplified by its ability to convert pounds to kilograms</p>
              <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> 
                </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
