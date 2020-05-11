import React, {Component, Fragment} from 'react';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import Logo from '../../assets/image/logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class TopNavigation extends Component {
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
                                            <a className="navbar-brand" href="index.html"><img src={Logo}
                                                                                               alt="Logo Img"/> </a>
                                        </div>

                                        <div className="menu_nav" id="navbarSupportedContent">
                                            <ul className="navbar-nav ml-auto">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#contact_form">Contact</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><span>&#124;</span></a>
                                                </li>
                                                <li className="nav-item dropdown menu_dropdown">
                                                    <a className="nav-link" href="#" id="navbarDropdown" role="button"
                                                       data-toggle="dropdown"
                                                       aria-haspopup="true" aria-expanded="false">
                                                        Menu
                                                        {/*<span><i className={fasFaBars}></i></span>*/}
                                                        <span><FontAwesomeIcon icon={faBars}/> </span>
                                                    </a>
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <a className="dropdown-item" href="#">Home</a>
                                                        <a className="dropdown-item" href="#">Contact</a>
                                                        <a className="dropdown-item" href="#">About Us</a>
                                                        <a className="dropdown-item" href="#">Home</a>
                                                        <a className="dropdown-item" href="#">About Us</a>
                                                        <a className="dropdown-item" href="#">Contact</a>
                                                        <a className="dropdown-item" href="#">About Us</a>
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