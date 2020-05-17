import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGoogle, faTwitter} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {

    constructor() {
        super();

        this.state = {
            linkedin: "https://www.linkedin.com/in/iamtheasad/"
        }
    }

    render() {
        return (
            <Fragment>
                {/*Footer Section Start*/}
                <footer className="custom_width">
                    <div className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center footer_content_width">
                                    <div className="social_icons">
                                        <a href={this.state.linkedin} target="_blank">
                                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                                        </a>
                                        <a href={this.state.linkedin} target="_blank">
                                            <FontAwesomeIcon icon={faTwitter}/>
                                        </a>
                                        <a href={this.state.linkedin} target="_blank">
                                            <FontAwesomeIcon icon={faGoogle}/>
                                        </a>
                                    </div>

                                    <div className="address">
                                        <p><a href={this.state.linkedin}>© All rights reserved. Anveshan Inc.</a></p>
                                        <p>
                                            P.O. Box 6894 <br/>
                                            Ahmedabad, London 25698 <br/>
                                            Phone: 1234 - 567 - 000
                                        </p>
                                    </div>

                                    <div className="design_by">
                                        <p>Designed by
                                            <a href={this.state.linkedin} target="_blank">asaduzzamanrana.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*Footer Section End */}
            </Fragment>
        );
    }
}

export default Footer;