import React from "react";
import useProducts from "../../hooks/useProducts";
import Loading from "../../Share/Loading";
import Card from "./Card";

const CardsContainer = ({ img }) => {
    const [allProducts, isLoading] = useProducts();
    const loadProduct = [...allProducts];
    loadProduct.length = 6;
    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <div className="text-center text-3xl my-4">Our New Product</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-16">
                {loadProduct?.map(p => (
                    <Card key={p._id} img={img} p={p} />
                ))}
            </div>
        </>
    );
};

export default CardsContainer;
