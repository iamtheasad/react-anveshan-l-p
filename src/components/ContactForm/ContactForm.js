import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';

class ContactForm extends Component {
    render() {
        return (
            <Fragment>
                {/*Contact Form Start */}
                <section class="form_custom_width">
                    <div class="contact_form_bg section_padding">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="text-center col-lg-8 offset-lg-2">
                                    <div class="contact_top process_top">
                                        <h2>take <span>the next</span> step </h2>
                                        <div class="our_process_border border_bar">
                                            <span class="bordr_top"></span>
                                            <span class="bordr_bottom"></span>
                                        </div>
                                        <p>
                                            Do you need our help to your brand to its fullest potential? Let us know how
                                            we can help you
                                        </p>
                                    </div>
                                </div>
                                <div class="form_icon">
                                    <img src="images/form_icon.png" alt="Form Icon"/>
                                </div>
                            </div>
                            {/*row / */}

                            {/*Contact Form*/}
                            <div id="contact_form" class="row height_60">
                                <div class="col-md-12 text-center">
                                    <div class="form_box">
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