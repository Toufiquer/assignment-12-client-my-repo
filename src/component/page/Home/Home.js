import React from "react";
import img from "../../../assets/images/img.png";
import Footer from "../../Share/Footer";
import CardsContainer from "./CardsContainer";
import Hero from "./Hero";
const Home = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                <Hero img={img} />
                <CardsContainer img={img} />
            </div>
            <Footer img={img} />
        </div>
    );
};

export default Home;
