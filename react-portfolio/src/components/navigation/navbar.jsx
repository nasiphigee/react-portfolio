
import React, { useEffect } from "react";
import $ from 'jquery';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTachometerAlt, faAddressBook, faClone, faCalendarAlt, faChartBar } from '@fortawesome/free-solid-svg-icons';


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

    return (
        <><nav className="navbar navbar-expand-custom navbar-mainbg">
            <a className="navbar-brand navbar-logo" href="#">
                <img src="/src/assets/images/logo.jpg" alt="Logo" height="30" />
            </a>
            <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} className="text-white" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0);"><FontAwesomeIcon icon={faTachometerAlt} /> Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="javascript:void(0);"><FontAwesomeIcon icon={faAddressBook} /> About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0);"><FontAwesomeIcon icon={faClone} /> Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0);"><FontAwesomeIcon icon={faCalendarAlt} /> Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0);"><FontAwesomeIcon icon={faChartBar} /> Get in Touch</a>
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
        </hamburger></>
    );
};
export default Navigation;