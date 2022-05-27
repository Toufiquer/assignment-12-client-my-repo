import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, _id }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-xl">Shoes!</h2>
                    <div className="text-left">
                        <div className="border p-2 w-full">Name: </div>
                        <div className="border p-2 w-full">description: </div>
                        <div className="border p-2 w-full">
                            minimum order quantity:{" "}
                        </div>
                        <div className="border p-2 w-full">
                            available quantity:{" "}
                        </div>
                        <div className="border p-2 w-full">
                            price (per unit price):{" "}
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link
                            to={`purchase/${_id || "454545"}`}
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
