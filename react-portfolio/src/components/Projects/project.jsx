import React from 'react';
import './project.css';
import { FaPlus, FaLink } from 'react-icons/fa'

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                        <img src="/src/assets/images/5Stars.png" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>App 1</h4>
                            <p>App</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                                <i className="bx bx-plus"></i>
                            </a>
                            <a href="portfolio-details.html" title="More Details">
                                <i className="bx bx-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                        <img src="/src/assets/images/taxcal.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Web 3</h4>
                            <p>Web</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3">
                                <i className="bx bx-plus"></i>
                            </a>
                            <a href="portfolio-details.html" title="More Details">
                                <i className="bx bx-link"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                        <img src="/src/assets/images/Calculator.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>App 2</h4>
                            <p>App</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2">
                                <i className="bx bx-plus"></i>
                            </a>
                            <a href="portfolio-details.html" title="More Details">
                                <i className="bx bx-link"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                        <img src="/src/assets/images/banking app.png" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Card 2</h4>
                            <p>Card</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2">
                                <i className="bx bx-plus"></i>
                            </a>
                            <a href="portfolio-details.html" title="More Details">
                                <i className="bx bx-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="contact.jsx" className="btn" target="_blank" rel="noopener noreferrer">
                Hire Me
            </a>
        </div>
    );
};

export default Projects;
