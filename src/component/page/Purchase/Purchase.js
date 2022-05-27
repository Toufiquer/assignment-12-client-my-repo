import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loading from "../../Share/Loading";
const Purchase = () => {
    const [product, SetProduct] = useState({});
    const [loading, SetLoading] = useState(false);
    const id = useParams();
    console.log(id);
    useEffect(() => {
        if (id) {
            SetLoading(true);
            fetch(`http://localhost:3500/product?id=${id.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    // authorization: `Bearer ${localStorage.getItem(
                    //     "access-token-12"
                    // )}`,
                },
            })
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
        formState: { errors },
    } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="my-16 container mx-auto">
            <div>
                <div className="m-2">
                    <div className="hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src="https://api.lorem.space/image/movie?w=260&h=400"
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
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        {/* Input Quantity */}
                        <label className="label">
                            <span className="label-text">Quantity:</span>
                            <span className="label-text-alt">
                                Min Quantity : {product.minimumQuantity}
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
                            })}
                            placeholder="Select Quantity"
                            className="input input-bordered input-accent w-full my-1"
                        />
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.name.message}{" "}
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
                            placeholder="Your Name"
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
                            placeholder="Your Email"
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
                            type="text"
                            autoComplete="number"
                            {...register("number", {
                                required: {
                                    value: true,
                                    message: "Mobile Number is Required.",
                                },
                                pattern: {
                                    value: /[0-9]{11,13}/,
                                    message: "Provide a valid Phone Number.",
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
