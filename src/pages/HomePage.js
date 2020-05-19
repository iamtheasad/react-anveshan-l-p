import React, {Component, Fragment} from 'react';
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import About from "../components/About/About";
import BottomTopButton from "../components/BottomTopButton/BottomTopButton";
import OurProcess from "../components/OurProcess/OurProcess";
import ServiceTerms from "../components/ServiceTerms/ServiceTerms";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner/>
                <About/>
                <OurProcess/>
                <ServiceTerms/>
                <ContactForm/>
                <BottomTopButton/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;