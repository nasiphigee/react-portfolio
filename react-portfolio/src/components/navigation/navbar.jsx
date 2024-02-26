import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouseUser, faAddressBook, faBarsProgress, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Hamburger = ({ children }) => {
  return (
    <div className="hamburger">
      {children}
    </div>
  );
}
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
    display: "inline-block",
    verticalAlign: "middle",
    animation: "spin 2s linear infinite"
  };

  const isExactHome = true;

  return (

    <>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="#">
          <div className="spinner">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" style={spinnerStyle}>
              <path className="path" stroke="#E91E63" strokeWidth="1.5" d="M9.743 10.25c3.213 1.96 5.017 4.676 7.248 4.676 2.588 0 2.791-4.8.518-5.668-3.107-1.187-5.178 3.719-8.284 5.03-1.415.677-3.41 1.014-4.09-1.14-.251-.797-.13-1.65.133-2.442v0c.425-1.278 2.132-1.66 3.35-1.081.304.144.668.346 1.125.625z" />
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
              <Link className="nav-link" to="/" onClick={() => scrollToSection("home")}>
                <FontAwesomeIcon icon={faHouseUser} /> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => scrollToSection("about")}>
                <FontAwesomeIcon icon={faAddressBook} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={() => scrollToSection("skills")}>
                <FontAwesomeIcon icon={faBarsProgress} /> Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={() => scrollToSection("projects")}>
                <FontAwesomeIcon icon={faLaptopCode} /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => scrollToSection("contact")} >
                <FontAwesomeIcon icon={faEnvelope} /> Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Hamburger className="hamburger">
        {/* Update the hamburger menu links to use NavLink components */}
        <ul><li><Link to="/" exact></Link></li></ul>
        <ul><li><Link to="/about"></Link></li></ul>
        <ul><li><Link to="/skills"></Link></li></ul>
        <ul><li><Link to="/projects"></Link></li></ul>
        <ul><li><Link to="/contact"></Link></li></ul>
      </Hamburger>
    </>
  );
};

export default Navigation;
