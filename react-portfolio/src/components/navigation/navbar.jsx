
import React, { useEffect } from "react";
import $ from 'jquery';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouseUser, faAddressBook, faBarsProgress, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => {
    useEffect(() => {
        function test() {
            var tabsNewAnim = $('#navbarSupportedContent');
            var activeItemNewAnim = tabsNewAnim.find('.active');
            var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
            var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
            var itemPosNewAnimTop = activeItemNewAnim.position();
            var itemPosNewAnimLeft = activeItemNewAnim.position();
            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left": itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });

            $("#navbarSupportedContent").on("click", "li", function (e) {
                $('#navbarSupportedContent ul li').removeClass("active");
                $(this).addClass('active');
                var activeWidthNewAnimHeight = $(this).innerHeight();
                var activeWidthNewAnimWidth = $(this).innerWidth();
                var itemPosNewAnimTop = $(this).position();
                var itemPosNewAnimLeft = $(this).position();
                $(".hori-selector").css({
                    "top": itemPosNewAnimTop.top + "px",
                    "left": itemPosNewAnimLeft.left + "px",
                    "height": activeWidthNewAnimHeight + "px",
                    "width": activeWidthNewAnimWidth + "px"
                });
            });
        }

        $(document).ready(function () {
            setTimeout(function () {
                test();
            });
        });

        $(window).on('resize', function () {
            setTimeout(function () {
                test();
            }, 500);
        });

        $(".navbar-toggler").click(function () {
            $(".navbar-collapse").slideToggle(300);
            setTimeout(function () {
                test();
            });
        });
    }, []);

    const spinnerStyle = {
        width: "30px",
        height: "30px",
        display: "inline-block", // Ensures the spinner aligns correctly with other inline or inline-block elements.
        verticalAlign: "middle", // Aligns the spinner in the middle of the line.
        animation: "spin 2s linear infinite" // Applies the CSS animation directly.
      };
    
      return (
        <>
          <nav className="navbar navbar-expand-custom navbar-mainbg">
            <a className="navbar-brand navbar-logo" href="#">
              <div className="spinner">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" style={spinnerStyle}>
                  <path className="path" stroke="#E91E63" strokeWidth="1.5" d="M9.743 10.25c3.213 1.96 5.017 4.676 7.248 4.676 2.588 0 2.791-4.8.518-5.668-3.107-1.187-5.178 3.719-8.284 5.03-1.415.677-3.41 1.014-4.09-1.14-.251-.797-.13-1.65.133-2.442v0c.425-1.278 2.132-1.66 3.35-1.081.304.144.668.346 1.125.625z"/>
                </svg>
              </div>
            </a>
            <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} className="text-white" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                <li className="nav-item">
                  <a className="nav-link" href="#"><FontAwesomeIcon icon={faHouseUser} /> Home</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#"><FontAwesomeIcon icon={faAddressBook} /> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><FontAwesomeIcon icon={faBarsProgress} /> Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><FontAwesomeIcon icon={faLaptopCode} /> Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><FontAwesomeIcon icon={faEnvelope} /> Get in Touch</a>
                </li>
              </ul>
            </div>
          </nav>
        <hamburger className="hamburger">
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
        </hamburger>
      </>
    );
  };
export default Navigation;