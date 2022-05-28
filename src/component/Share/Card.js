import React from "react";
import { Link } from "react-router-dom";

const Card = ({ p }) => {
    const img = p.img;
    return (
        <div className="border p-4">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className="w-68 h-44" src={img} alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-xl">{p.productName}</h2>
                    <div className="text-left">
                        <div className="border p-2 w-full">
                            Supplier Name: {p.name}
                        </div>
                        <div className="border p-2 w-full">
                            description: {p.productDescription}
                        </div>
                        <div className="border p-2 w-full">
                            minimum order quantity: {p.minimumQuantity}
                        </div>
                        <div className="border p-2 w-full">
                            available quantity: {p.availableQuantity}
                        </div>
                        <div className="border p-2 w-full">
                            price (per unit price): {p.price}
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link
                            to={`purchase/${p._id || "454545"}`}
                            className="btn btn-primary mx-auto"
                        >
                            Order Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
