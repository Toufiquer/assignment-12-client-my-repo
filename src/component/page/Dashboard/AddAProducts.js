import React, { useState } from "react";
import img from "../../../assets/images/img.png";
import { useForm } from "react-hook-form";
const AddAProducts = () => {
    const [conErr, SetError] = useState(null);
    // Error
    let err;
    if (false) {
        SetError(false);
    }
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -

    // Use Form for design and validate
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -

    // Handle Submit
    const onSubmit = async e => {
        console.log(e);
    };
    return (
        <>
            <div
                style={{ backgroundImage: `url(${img})` }}
                className="h-screen pt-16"
            >
                <div className="container">
                    <div className="text-center text-xl my-4">
                        Add A New Product
                    </div>
                    <form
                        className="flex flex-col w-full lg:w-2/4 mx-auto gap-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* Input Person Name */}
                        <input
                            type="text"
                            autoComplete="name"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is Required.",
                                },
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: "Provide a valid Name.",
                                },
                            })}
                            placeholder="Your Name"
                            className="input input-bordered input-accent w-full"
                        />
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.name.message}{" "}
                            </span>
                        )}
                        {errors.name?.type === "pattern" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.name.message}{" "}
                            </span>
                        )}
                        {/* --- --- --- */}
                        <>
                            {/* Input Person Email */}
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
                                className="input input-bordered input-accent w-full"
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
                        </>
                        <>
                            {/* Input Product name */}
                            <input
                                type="text"
                                autoComplete="Product Name"
                                {...register("productName", {
                                    required: {
                                        value: true,
                                        message: "product Name is Required.",
                                    },
                                })}
                                placeholder="Product Name"
                                className="input input-bordered input-accent w-full"
                            />
                            {errors.productName?.type === "required" && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {errors.productName.message}{" "}
                                </span>
                            )}
                            {/* --- --- --- */}
                            {/* Input Minimum Quantity */}
                            <input
                                type="number"
                                autoComplete="Minimum Quantity"
                                {...register("minimumQuantity", {
                                    required: {
                                        value: true,
                                        message:
                                            "Minimum Quantity is Required.",
                                    },
                                })}
                                placeholder="Minimum Quantity"
                                className="input input-bordered input-accent w-full"
                            />
                            {errors.minimumQuantity?.type === "required" && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {errors.minimumQuantity.message}{" "}
                                </span>
                            )}
                            {/* --- --- --- */}
                            {/* Input Available Quantity */}
                            <input
                                type="number"
                                autoComplete="Available Quantity"
                                {...register("availableQuantity", {
                                    required: {
                                        value: true,
                                        message:
                                            "Available Quantity is Required.",
                                    },
                                })}
                                placeholder="Available Quantity"
                                className="input input-bordered input-accent w-full"
                            />
                            {errors.availableQuantity?.type === "required" && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {errors.availableQuantity.message}{" "}
                                </span>
                            )}
                            {/* --- --- --- */}
                            {/* Input Available Quantity */}
                            <input
                                type="number"
                                autoComplete="Price Per Unit"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "Price Per Unit is Required.",
                                    },
                                })}
                                placeholder="Price Per Unit"
                                className="input input-bordered input-accent w-full"
                            />
                            {errors.price?.type === "required" && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {errors.price.message}{" "}
                                </span>
                            )}
                            {/* --- --- --- */}
                            {/* Input Product Description */}
                            <textarea
                                type="text"
                                autoComplete="Product Description"
                                {...register("productDescription", {
                                    required: {
                                        value: true,
                                        message:
                                            "Product Description is Required.",
                                    },
                                })}
                                placeholder="product Description"
                                className="input input-bordered input-accent w-full"
                            />
                            {errors.productDescription?.type === "required" && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {errors.productDescription.message}{" "}
                                </span>
                            )}
                            {/* --- --- --- */}
                        </>

                        {/* Error Show */}
                        {err && (
                            <span className="label-text-alt text-lg text-red-500">
                                {err}
                            </span>
                        )}
                        {/* --- --- --- */}
                        {/* Error Show */}
                        {conErr && (
                            <span className="label-text-alt text-lg text-red-500">
                                {conErr}
                            </span>
                        )}
                        {/* --- --- --- */}
                        <input
                            type="submit"
                            value="Add Product"
                            className="btn btn-primary w-full"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddAProducts;
