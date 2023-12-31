import React from "react";
import EventSection from '../../components/eventSection/EventSection'
import Conference from "../../components/conference/Conference";
import Header from "../../components/header/Header";
import ExploreGroups from "../../components/exploreGroups/ExploreGroups";
import DestinationsContainer from "../../components/topDestinationsContainer/DestinationsContainer";
import Footer from "../../components/footer/Footer";
export default function Events(props) {
 return (
    <>
    <Header/>
    <EventSection searsh={props.searsh} />
    <Conference/>
    <DestinationsContainer />
    <ExploreGroups/>
    <Footer/>
 </>

);
}
