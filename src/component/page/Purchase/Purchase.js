import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Share/Loading";
const Purchase = () => {
    const navigate = useNavigate();
    const [product, SetProduct] = useState({});
    const [loading, SetLoading] = useState(false);
    const id = useParams();
    useEffect(() => {
        if (id) {
            SetLoading(true);
            fetch(
                `https://fierce-savannah-66985.herokuapp.com/product?id=${id.id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        // authorization: `Bearer ${localStorage.getItem(
                        //     "access-token-12"
                        // )}`,
                    },
                }
            )
                .then(res => res.json())
                .then(data => {
                    SetProduct(data);
                });
            SetLoading(false);
        }
    }, [id]);
    if (loading) {
        <Loading />;
    }
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const purchaseSubmit = order => {
        order.ProductId = id.id;
        order.productName = product.productName;
        fetch(`https://fierce-savannah-66985.herokuapp.com/addOrder`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // authorization: `Bearer ${localStorage.getItem(
                //     "access-token"
                // )}`,
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(r => {
                if (r.exists) {
                    toast("Order Already Exist. Try another one.");
                } else if (r.success === false) {
                    toast("Please Try again");
                } else {
                    toast("Order submitted");
                    reset();
                    // console.log(r);
                    navigate("/payment");
                }
            });
    };
    return (
        <div className="my-16 container mx-auto">
            <div>
                <div className="m-2">
                    <div className="hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src={product.img}
                                className="max-w-sm rounded-lg shadow-2xl"
                                alt="Name"
                            />
                            <div className="flex">
                                <div className="text-left">
                                    <>
                                        <div className="card-body text-center">
                                            <h2 className="text-xl">
                                                {product.productName}
                                            </h2>
                                            <div className="text-left">
                                                <div className="border p-2 w-full">
                                                    Supplier Name:{" "}
                                                    {product.name}
                                                </div>
                                                <div className="border p-2 w-full">
                                                    description:{" "}
                                                    {product.productDescription}
                                                </div>
                                                <div className="border p-2 w-full">
                                                    minimum order quantity:{" "}
                                                    {product.minimumQuantity}
                                                </div>
                                                <div className="border p-2 w-full">
                                                    available quantity:{" "}
                                                    {product.availableQuantity}
                                                </div>
                                                <div className="border p-2 w-full">
                                                    price (per unit price):{" "}
                                                    {product.price}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full my-1 lg:w-1/2 m-12 mx-auto border py-6 px-1">
                    <div className="text-center text-2xl my-4">
                        Please fill the Information.
                    </div>
                    <form className="" onSubmit={handleSubmit(purchaseSubmit)}>
                        {/* Input Quantity */}
                        <label className="label">
                            <span className="label-text">Quantity:</span>
                            <span className="label-text-alt">
                                Min Quantity : {product.minimumQuantity} || Max
                                Quantity : {product.availableQuantity}
                            </span>
                        </label>
                        <input
                            type="number"
                            autoComplete="quantity"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Quantity is Required.",
                                },
                                min: {
                                    value: product.minimumQuantity,
                                    message: `Minimum Quantity : ${product.minimumQuantity}`,
                                },
                                max: {
                                    value: product.availableQuantity,
                                    message: `Maximum Quantity : ${product.availableQuantity}`,
                                },
                            })}
                            placeholder="Select Quantity"
                            className="input input-bordered input-accent w-full my-1"
                        />
                        {errors.quantity?.type === "required" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.quantity.message}{" "}
                            </span>
                        )}
                        {errors.quantity?.type === "min" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.quantity.message}{" "}
                            </span>
                        )}
                        {errors.quantity?.type === "max" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.quantity.message}{" "}
                            </span>
                        )}
                        {/* --- --- --- */}

                        {/* Input name */}
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <input
                            type="name"
                            autoComplete="name"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is Required.",
                                },
                            })}
                            value={product.name || ""}
                            readOnly
                            className="input input-bordered input-accent w-full my-1"
                        />
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.name.message}{" "}
                            </span>
                        )}
                        {/* --- --- --- */}

                        {/* Input Email */}
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input
                            type="email"
                            autoComplete="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required.",
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Provide a valid Email.",
                                },
                            })}
                            value={product.email || ""}
                            readOnly
                            className="input input-bordered input-accent w-full my-1"
                        />
                        {errors.email?.type === "required" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.email.message}{" "}
                            </span>
                        )}
                        {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.email.message}{" "}
                            </span>
                        )}
                        {/* --- --- --- */}

                        {/* Input Address */}
                        <label className="label">
                            <span className="label-text">Address:</span>
                        </label>
                        <input
                            type="address"
                            autoComplete="address"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "Address is Required.",
                                },
                            })}
                            placeholder="Your Address"
                            className="input input-bordered input-accent w-full my-1"
                        />
                        {errors.address?.type === "required" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.address.message}{" "}
                            </span>
                        )}
                        {/* --- --- --- */}
                        {/* Input Number */}
                        <label className="label">
                            <span className="label-text">Mobile Number:</span>
                        </label>
                        <input
                            type="number"
                            autoComplete="number"
                            {...register("number", {
                                required: {
                                    value: true,
                                    message: "Mobile Number is Required.",
                                },
                                pattern: {
                                    value: /[0-9]{11,13}/,
                                    message:
                                        "Provide a valid Phone Number. Length will be 11/13",
                                },
                            })}
                            placeholder="Your Mobile Number"
                            className="input input-bordered input-accent w-full my-1"
                        />
                        {errors.number?.type === "required" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.number.message}{" "}
                            </span>
                        )}
                        {errors.number?.type === "pattern" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.number.message}{" "}
                            </span>
                        )}
                        {/* --- --- --- */}
                        {/* Input message */}
                        <label className="label">
                            <span className="label-text">Message:</span>
                        </label>
                        <textarea
                            type="message"
                            autoComplete="message"
                            {...register("message", {
                                required: {
                                    value: false,
                                },
                            })}
                            placeholder="Your Message"
                            className="textarea textarea-info w-full my-1"
                        />
                        {/* --- --- --- */}

                        <input
                            className="btn btn-active btn-ghost block mx-auto"
                            type="submit"
                            value="Purchase"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
