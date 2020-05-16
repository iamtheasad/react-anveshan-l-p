import React, {Component, Fragment} from 'react';
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import About from "../components/About/About";
import BottomTopButton from "../components/BottomTopButton/BottomTopButton";
import OurProcess from "../components/OurProcess/OurProcess";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner/>
               <About/>
               <OurProcess/>
               <BottomTopButton/>
            </Fragment>
        );
    }
}

export default HomePage;