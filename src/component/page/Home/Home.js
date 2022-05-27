import React from "react";
import img from "../../../assets/images/img.png";
import Footer from "../../Share/Footer";
import BusinessSummary from "./BusinessSummary";
import CardsContainer from "./CardsContainer";
import Hero from "./Hero";
import OurVision from "./OurVision";
import Review from "./Review";
import WeAreBest from "./WeAreBest";
const Home = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                <Hero img={img} />
                <CardsContainer img={img} />
                <BusinessSummary />
                <OurVision />
                <WeAreBest />
                <Review />
            </div>
            <Footer img={img} />
        </div>
    );
};

export default Home;
