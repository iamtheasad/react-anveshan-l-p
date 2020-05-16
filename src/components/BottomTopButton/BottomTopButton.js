import React, {Component, Fragment} from 'react';
import $ from "jquery";
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";


class BottomTopButton extends Component {

    componentDidMount() {
        /* Scroll to Top Button Start */
        // https://codepen.io/karencho/pen/KIgur
        var topBottomButton = $(".top_bottom_button");

        $(window).scroll(function () {

            var topPosition = $(this).scrollTop(); // scrollTop is a jquery function

            if (topPosition > 900) {
                $(topBottomButton).css({
                    "opacity": "1",
                })

            } else {
                $(topBottomButton).css({
                    "opacity": "0",
                })
            }
        });

        $(topBottomButton).on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;

        });
        /* Scroll to Top Button End */
    }

    render() {
        return (
            <Fragment>
                {/*Bottom To Top Button */}
                <button className="top_bottom_button d-flex justify-content-center align-items-center"><FontAwesomeIcon
                    icon={faAngleUp}></FontAwesomeIcon></button>
            </Fragment>
        );
    }
}

export default BottomTopButton;