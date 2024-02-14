import React from "react";
import "./home.css";

export const Home = () => {
    return (
        <div className="home">
            <div className="div-2">
                <div className="overlap">
                    <p className="hi-i-m-nasiphi-gwija">
                        <span className="span">
                            Hi&nbsp;&nbsp;I’m <br />
                        </span>
                        <span className="text-wrapper-2">
                            Nasiphi Gwija <br />
                        </span>
                        <span className="span">Junior Software Developer </span>
                    </p>
                    <div className="rectangle-3" />
                </div>
                <div className="overlap-2">
                    <div className="rectangle-4" />
                    <img
                        className="home-img"
                        alt="Nasiphi"
                        src="https://cdn.animaapp.com/projects/65c334fcf4d3256a5645b298/releases/65c33566a111d9ebe1d3014f/img/rectangle-7.png"
                    />
                </div>
                <p className="text-wrapper-3">
                    I am a software developer with extensive experience for over 1 year. My expertise is to create and design
                    website design, apps design.
                </p>
                <button className="button">
                    <div className="text-wrapper-4">Download CV</div>
                </button>
                <button className="button-2">
                    <div className="text-wrapper-5">See My Projects</div>
                </button>

            </div>
        </div>
    );
};

export default Home
