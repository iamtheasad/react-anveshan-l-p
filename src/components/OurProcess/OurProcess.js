import React, {Component, Fragment} from 'react';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class OurProcess extends Component {
    render() {
        return (
            <Fragment>
                {/* Our Process Start */}
                <section id="ourProcess" className="custom_width section_padding">
                    <div className="container">
                        <div className="row">
                            <div className="text-center col-md-12">
                                <div className="process_top">
                                    <h2>OUR PROCESs</h2>
                                    <div className="our_process_border border_bar">
                                        <span className="bordr_top"></span>
                                        <span className="bordr_bottom"></span>
                                    </div>
                                    <p>Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec laoreet volutpat, mi
                                        diam consectetur
                                        nisl, a vestibulum enim ligula a enim. Phasellus nec convallis lorem. Vestibulum
                                        a vestibulum enim
                                        ligula a enim. Phasellus nec convallis lorem. </p>
                                </div>
                            </div>
                        </div>
                        {/*row / */}

                        <div className="row">
                            <div className="col-md-12">
                                <div className="process_img">
                                    <div className="process_bg_1">
                                        <h3>meeting</h3>
                                    </div>
                                    <div className="process_bg_2">
                                        <h3>Planning &<br/> organizing</h3>
                                    </div>
                                    <div className="process_bg_3">
                                        <h3>execute</h3>
                                    </div>
                                    <div className="process_bg_4">
                                        <h3>deliver</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                         {/*row /*/}

                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="process_desc">
                                    <h3>meeting</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet
                                        sollicitudin augue. Sed
                                        dui quam, molestie at semper vitae, sagittis eu justo.Lorem ipsum dolor sit
                                        amet, consectetur
                                        adipiscing elit. Quisque sit amet sollicitudin augue. Sed dui quam, molestie at
                                        semper vitae,
                                        sagittis eu justo.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="process_desc">
                                    <h3>Planning & organizing</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet
                                        sollicitudin augue. Sed
                                        dui quam, molestie at semper vitae, sagittis eu justo.Lorem ipsum dolor sit
                                        amet, consectetur
                                        adipiscing elit. Quisque sit amet sollicitudin augue. Sed dui quam, molestie at
                                        semper vitae,
                                        sagittis eu justo.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="process_desc">
                                    <h3>execute</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet
                                        sollicitudin augue. Sed
                                        dui quam, molestie at semper vitae, sagittis eu justo.Lorem ipsum dolor sit
                                        amet, consectetur
                                        adipiscing elit. Quisque sit amet sollicitudin augue. Sed dui quam, molestie at
                                        semper vitae,
                                        sagittis eu justo.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="process_desc">
                                    <h3>deliver</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet
                                        sollicitudin augue. Sed
                                        dui quam, molestie at semper vitae, sagittis eu justo.Lorem ipsum dolor sit
                                        amet, consectetur
                                        adipiscing elit. Quisque sit amet sollicitudin augue. Sed dui quam, molestie at
                                        semper vitae,
                                        sagittis eu justo.</p>
                                </div>
                            </div>
                        </div>
                    {/* Row / */}
                    </div>
                     {/*container / */}
                </section>
                 {/*Our Process End */}
            </Fragment>
        );
    }
}

export default OurProcess;