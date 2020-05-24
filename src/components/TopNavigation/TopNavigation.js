import React, {Component, Fragment} from 'react';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import Logo from '../../assets/image/logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {Link} from "react-scroll";


class TopNavigation extends Component {

    componentDidMount() {
        // Navigation Background Change on Scrolling
        $(window).scroll(function () {
            $('.header_menu').toggleClass('scrolled', $(this).scrollTop() > 100
            );
        });

    }

    render() {
        return (
            <Fragment>
                {/*Menu Area Start*/}
                <div className="header_menu">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 p-0">
                                <div className="menu">
                                    <nav className="navbar navbar-expand-lg navbar-light">
                                        <div className="menu_img">
                                            <Link className="navbar-brand" activeClass="active"
                                                  to="top_banner"
                                                  spy={true}
                                                  smooth={true}
                                                  hashSpy={true}
                                                  offset={0}
                                                  duration={500}
                                                  delay={100}
                                            >
                                                <img src={Logo} alt="Logo Img"/>
                                            </Link>
                                        </div>

                                        <div className="menu_nav" id="navbarSupportedContent">
                                            <ul className="navbar-nav ml-auto">
                                                <li className="nav-item">
                                                    <Link className="nav-link" activeClass="active"
                                                          to="contact_area"
                                                          spy={true}
                                                          smooth={true}
                                                          hashSpy={true}
                                                          offset={0}
                                                          duration={500}
                                                          delay={100}
                                                    >
                                                        Contact
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><span>&#124;</span></a>
                                                </li>
                                                <li className="nav-item dropdown menu_dropdown">
                                                    <a className="nav-link" href="#" id="navbarDropdown" role="button"
                                                       data-toggle="dropdown"
                                                       aria-haspopup="true" aria-expanded="false">
                                                        Menu
                                                        <span><FontAwesomeIcon icon={faBars}/> </span>
                                                    </a>

                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <Link className="dropdown-item" activeClass="active"
                                                              to="top_banner"
                                                              spy={true}
                                                              smooth={true}
                                                              hashSpy={true}
                                                              offset={0}
                                                              duration={500}
                                                              delay={100}
                                                        >
                                                            Home
                                                        </Link>

                                                        <Link className="dropdown-item" activeClass="active"
                                                              to="contact_area"
                                                              spy={true}
                                                              smooth={true}
                                                              hashSpy={true}
                                                              offset={0}
                                                              duration={500}
                                                              delay={100}
                                                        >
                                                            Contact
                                                        </Link>


                                                        <Link className="dropdown-item" activeClass="active"
                                                              to="about"
                                                              spy={true}
                                                              smooth={true}
                                                              hashSpy={true}
                                                              offset={0}
                                                              duration={500}
                                                              delay={100}
                                                        >
                                                            About Us
                                                        </Link>


                                                        <Link className="dropdown-item" activeClass="active"
                                                              to="services"
                                                              spy={true}
                                                              smooth={true}
                                                              hashSpy={true}
                                                              offset={0}
                                                              duration={500}
                                                              delay={100}
                                                        >
                                                            Services
                                                        </Link>


                                                        <Link className="dropdown-item" activeClass="active"
                                                              to="our_process"
                                                              spy={true}
                                                              smooth={true}
                                                              hashSpy={true}
                                                              offset={0}
                                                              duration={500}
                                                              delay={100}
                                                        >
                                                            Our Process
                                                        </Link>

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* menu / */}
                            </div>
                            {/*col / */}
                        </div>
                        {/* menu_area / */}
                    </div>
                    {/* Menu Area End */}
                </div>
                {/* Menu Area End */}
            </Fragment>
        );
    }
}

export default TopNavigation;