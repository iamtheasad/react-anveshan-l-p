import React, {Component, Fragment} from 'react';
import $ from 'jquery';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import videoThumbnail from '../../assets/image/video_thumb.jpg';
import {faCircle, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class About extends Component {

    constructor() {
        super();

        this.state = {
            videoSrc: "https://www.youtube.com/embed/jgnVsuKY3oM"
        }
    }

    componentDidMount() {

        /* Bootstrap Video Modal Start */
        var $videoSrc;
        $('.video_play_button').click(function () {
            $videoSrc = $(this).data("src");
        });

        console.log($videoSrc);

        $('#myVideoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#myVideoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
        /* Bootstrap Video Modal End */
    }

    render() {
        return (
            <Fragment>
                { /* Quisque / About Start */}
                <section className="custom_width">
                    <div className="container-fluid container_padding">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="quisque_bg">
                                    <div className="quisque_bg_table">
                                        <h4>Interdum tincidunt</h4>
                                        <p>nec laoreet volutpat, mi diam consectetur nisl, a vestibulum enimer</p>
                                    </div>
                                    <span className="mountain_top"><FontAwesomeIcon
                                        icon={faCircle}></FontAwesomeIcon></span>
                                </div>
                            </div>
                            <div className="col-lg-6 p-0">
                                <div className="quisque_right">
                                    <div className="quisque_table">
                                        <h2>Quisque <span>&</span> <br/> siter amet</h2>
                                        <div className="border_bar">
                                            <span className="bordr_bottom"></span>
                                        </div>
                                        <p>Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec laoreet
                                            volutpat, mi diam
                                            consectetur nisl, a vestibulum enim ligula a enim. Phasellus nec convallis
                                            lorem. Vestibulum
                                            a
                                            vestibulum enim ligula a enim. Phasellus nec convallis lorem. </p>

                                        <div className="quisque_border"></div>

                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="quisque_video_thumbnail">
                                                    <img src={videoThumbnail} alt="Quisque Video Thumbnail"/>

                                                    <button type="button" className="btn video_play_button"
                                                            data-toggle="modal"
                                                            data-src={this.state.videoSrc}
                                                            data-target="#myVideoModal">
                                                        <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
                                                    </button>
                                                </div>

                                                {/*Modal */}
                                                <div className="modal fade" id="myVideoModal" tabindex="-1"
                                                     role="dialog"
                                                     aria-hidden="true">
                                                    <div className="modal-dialog" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-body">
                                                                <button type="button" className="close"
                                                                        data-dismiss="modal"
                                                                        aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                                {/*16:9 aspect ratio */}
                                                                <div
                                                                    className="embed-responsive embed-responsive-16by9">
                                                                    <iframe className="embed-responsive-item"
                                                                            src={videoThumbnail} id="video"
                                                                            allow="autoplay"></iframe>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="quisque_video_text">
                                                    <p>See how lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Quisque sit amet
                                                        sollicitudin augue.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*row */}
                    </div>
                    {/*container-fluid / */}
                </section>
                {/*Quisque / About End*/}
            </Fragment>
        );
    }
}

export default About;