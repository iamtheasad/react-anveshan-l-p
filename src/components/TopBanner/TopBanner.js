import React, {Component, Fragment} from 'react';
import Toggle from '../../assets/image/toggle_on_off.png';
import Triagnle from '../../assets/image/triangle.png';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class TopBanner extends Component {
    render() {
        return (
            <Fragment>
               {/* Header Background Image Start*/}
                <header className="custom_width">
                    <div className="header_bg">
                        <div className="container-fluid">
                            <div className="row text-center">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="header_body_text">
                                        <div className="header_body_table">
                                            <h1>Research & Analysis <br/> <span>driving results</span></h1>
                                            <p>Anveshan is a research and analysis consultants that helps to make solid
                                                decisions and drive
                                                results.</p>

                                            <a href="#" className="scroll_btn">
                                                <img src={Toggle} alt="Scroll"/><span>Scroll</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="header_triangle">
                                    <img src={Triagnle} alt="Header Triangle Icon"/>
                                    <img src={Triagnle} alt="Header Triangle Icon"/>
                                    <img src={Triagnle} alt="Header Triangle Icon"/>
                                </div>
                               {/*header_triangle /*/}
                            </div>
                        </div>
                    </div>
                    {/*header_bg / */}
                </header>
                 {/*Header Background Image End*/}
            </Fragment>
        );
    }
}

export default TopBanner;