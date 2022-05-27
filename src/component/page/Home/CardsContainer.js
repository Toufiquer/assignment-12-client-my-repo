import React from "react";
import Card from "./Card";

const CardsContainer = ({ img }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-16">
            <Card img={img} />
            <Card img={img} />
            <Card img={img} />
            <Card img={img} />
            <Card img={img} />
            <Card img={img} />
        </div>
    );
};

export default CardsContainer;
