import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import FormIcon from '../../assets/image/form_icon.png';

class ContactForm extends Component {
    render() {
        return (
            <Fragment>
                {/*Contact Form Start */}
                <section className="form_custom_width">
                    <div className="contact_form_bg section_padding">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="text-center col-lg-8 offset-lg-2">
                                    <div className="contact_top process_top">
                                        <h2>take <span>the next</span> step </h2>
                                        <div className="our_process_border border_bar">
                                            <span className="bordr_top"></span>
                                            <span className="bordr_bottom"></span>
                                        </div>
                                        <p>
                                            Do you need our help to your brand to its fullest potential? Let us know how
                                            we can help you
                                        </p>
                                    </div>
                                </div>
                                <div className="form_icon">
                                    <img src={FormIcon} alt="Form Icon"/>
                                </div>
                            </div>
                            {/*row / */}

                            {/*Contact Form*/}
                            <div id="contact_form" className="row height_60">
                                <div className="col-md-12 text-center">
                                    <div className="form_box">
                                        <form action="index.html">
                                            <input type="text" name="name" id="name" placeholder="Name"/>
                                            <input type="email" name="email" id="email" placeholder="Email"/>
                                            <input type="tel" name="telephone" id="telehone" placeholder="Telephone"/>
                                            <textarea name="texarea" id="textarea" placeholder="Message" cols="30"
                                                      rows="1"></textarea>

                                            <input type="submit" value="Submit"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* container/ */}
                    </div>
                    {/*contact_form_bg /*/}
                </section>
                {/*Contact Form End*/}
            </Fragment>
        );
    }
}

export default ContactForm;