import React, {Component, Fragment} from 'react';
import Triangle from '../../assets/image/triangle.png';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class ServiceTerms extends Component {
    render() {
        return (
            <Fragment>
                {/* Services & Terms Start */}
                <section id="services" className="custom_width">
                    <div className="service_bg section_padding">
                        <div className="container">
                            <div className="row">
                                <div className="text-center col-lg-12">
                                    <div className="service_top process_top">
                                        <h2>services <span>&</span> terms </h2>
                                        <div className="our_process_border border_bar">
                                            <span className="bordr_bottom"></span>
                                        </div>
                                        <p>Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec laoreet
                                            volutpat, mi diam
                                            consectetur nisl, a vestibulum enim ligula a enim. Phasellus nec convallis
                                            lorem. Vestibulum a
                                            vestibulum enim ligula a enim. Phasellus nec convallis lorem. </p>
                                    </div>
                                </div>

                                <div className="service_triangle">
                                    <img src={Triangle} alt="Service Triangle" />
                                </div>
                            </div>
                            {/* row / */}
                        </div>
                        {/*container /*/}

                        <div className="container-fluid height_85">
                            <div className="row service_content_height">
                                <div className="col-md-12 col-lg-4 service_box_width">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3 p-0 m-0">
                                            <div
                                                className="service_arrow_1 d-flex justify-content-center align-items-center">
                                                <span><FontAwesomeIcon icon={faLongArrowAltRight}/></span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-9 p-0 m-0">
                                            <div className="service_text_1">
                                                <div className="service_text_table">
                                                    <h3>Adipisecting</h3>
                                                    <p>Vestibulum tempor interdum tincidunt.
                                                        Nam feugiat, metus nec laoreet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* col / */}

                                <div className="col-md-12 col-lg-4 service_box_width">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3 p-0 m-0">
                                            <div
                                                className="service_arrow_1 d-flex justify-content-center align-items-center">
                                                 <span><FontAwesomeIcon icon={faLongArrowAltRight}/></span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-9 p-0 m-0">
                                            <div className="service_text_1">
                                                <div className="service_text_table">
                                                    <h3>Sit amet consectetur</h3>
                                                    <p>Vestibulum tempor interdum tincidunt.
                                                        Nam feugiat, metus nec laoreet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* col / */}

                                <div className="col-md-12 col-lg-4 service_box_width">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3 p-0 m-0">
                                            <div
                                                className="service_arrow_1 d-flex justify-content-center align-items-center">
                                                 <span><FontAwesomeIcon icon={faLongArrowAltRight}/></span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-9 p-0 m-0">
                                            <div className="service_text_1">
                                                <div className="service_text_table">
                                                    <h3>Adipisecting</h3>
                                                    <p>Vestibulum tempor interdum tincidunt.
                                                        Nam feugiat, metus nec laoreet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* col / */}

                                <div className="col-md-12 col-lg-4 service_box_width">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3 p-0 m-0">
                                            <div
                                                className="service_arrow_2 service_arrow_1 d-flex justify-content-center align-items-center">
                                                 <span><FontAwesomeIcon icon={faLongArrowAltRight}/></span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-9 p-0 m-0">
                                            <div className="service_text_2 service_text_1">
                                                <div className="service_text_table">
                                                    <h3>Quisquesit amet </h3>
                                                    <p>Vestibulum tempor interdum tincidunt.
                                                        Nam feugiat, metus nec laoreet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* col / */}

                                <div className="col-md-12 col-lg-4 service_box_width">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3 p-0 m-0">
                                            <div
                                                className="service_arrow_2 service_arrow_1 d-flex justify-content-center align-items-center">
                                                 <span><FontAwesomeIcon icon={faLongArrowAltRight}/></span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-9 p-0 m-0">
                                            <div className="service_text_2 service_text_1">
                                                <div className="service_text_table">
                                                    <h3>Adipisecting</h3>
                                                    <p>Vestibulum tempor interdum tincidunt.
                                                        Nam feugiat, metus nec laoreet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* col / */}

                                <div className="col-md-12 col-lg-4 service_box_width">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3 p-0 m-0">
                                            <div
                                                className="service_arrow_2 service_arrow_1 d-flex justify-content-center align-items-center">
                                                 <span><FontAwesomeIcon icon={faLongArrowAltRight}/></span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-9 p-0 m-0">
                                            <div className="service_text_2 service_text_1">
                                                <div className="service_text_table">
                                                    <h3>Quisquesit amet </h3>
                                                    <p>Vestibulum tempor interdum tincidunt.
                                                        Nam feugiat, metus nec laoreet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* col / */}

                                <div className="col-md-12 col-lg-4 service_box_width">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3 p-0 m-0">
                                            <div
                                                className="service_arrow_3 service_arrow_1 d-flex justify-content-center align-items-center">
                                                 <span><FontAwesomeIcon icon={faLongArrowAltRight}/></span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-9 p-0 m-0">
                                            <div className="service_text_3 service_text_1">
                                                <div className="service_text_table">
                                                    <h3>Molestie at semper </h3>
                                                    <p>Vestibulum tempor interdum tincidunt.
                                                        Nam feugiat, metus nec laoreet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* col / */}

                                <div className="col-md-12 col-lg-4 service_box_width">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3 p-0 m-0">
                                            <div
                                                className="service_arrow_3 service_arrow_1 d-flex justify-content-center align-items-center">
                                                 <span><FontAwesomeIcon icon={faLongArrowAltRight}/></span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-9 p-0 m-0">
                                            <div className="service_text_3 service_text_1">
                                                <div className="service_text_table">
                                                    <h3>Quisque sit amet </h3>
                                                    <p>Vestibulum tempor interdum tincidunt.
                                                        Nam feugiat, metus nec laoreet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* col / */}

                                <div className="col-md-12 col-lg-4 service_box_width">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3 p-0 m-0">
                                            <div
                                                className="service_arrow_3 service_arrow_1 d-flex justify-content-center align-items-center">
                                                 <span><FontAwesomeIcon icon={faLongArrowAltRight}/></span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-9 p-0 m-0">
                                            <div className="service_text_3 service_text_1">
                                                <div className="service_text_table">
                                                    <h3>AMolestie at semperipisecting</h3>
                                                    <p>Vestibulum tempor interdum tincidunt.
                                                        Nam feugiat, metus nec laoreet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* col / */}
                            </div>
                            {/*row / */}
                        </div>
                        {/*container-fluid / */}
                    </div>
                    {/*service_bg */}
                </section>
                {/*Services & Terms End */}
            </Fragment>
    );
    }
    }

    export default ServiceTerms;