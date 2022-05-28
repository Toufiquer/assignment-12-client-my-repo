import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ModalCard = ({ product, refetch }) => {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [availableQuantity, SetProductName] = useState("");
    const [minimumQuantity, SetProductDescription] = useState("");
    const [price, SetPrice] = useState("");
    const [productDescription, SetMinimumQuantity] = useState("");
    const [productName, SetAvailableQuantity] = useState("");
    console.log(product);
    // Use Form for design and validate
    useEffect(() => {
        const {
            name,
            email,
            availableQuantity,
            minimumQuantity,
            price,
            productDescription,
            productName,
        } = product;
        SetName(name);
        SetEmail(email);
        SetProductName(productName);
        SetProductDescription(productDescription);
        SetPrice(price);
        SetMinimumQuantity(minimumQuantity);
        SetAvailableQuantity(availableQuantity);
    }, [product]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -
    const onSubmit = e => {
        console.log(e);
        toast("Update");
    };
    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    id="product-update"
                    className="modal-toggle z-60"
                />
                <div className="modal pt-14">
                    <div className="modal-box relative">
                        <div className="text-center text-2xl my-2">
                            Update Product
                        </div>
                        <label
                            htmlFor="product-update"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <>
                            {/* Start From  */}

                            <>
                                {/* Form */}
                                <form
                                    className="flex flex-col w-full mx-auto gap-4"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    {/* Input Person Name */}
                                    <label className="label">
                                        <span className="label-text">
                                            Name:
                                        </span>
                                    </label>
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
                                                message:
                                                    "Provide a valid Name.",
                                            },
                                        })}
                                        placeholder="Your Name"
                                        value={name || ""}
                                        className="input input-bordered input-accent w-full"
                                        onChange={e => SetName(e.target.value)}
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
                                        <label className="label">
                                            <span className="label-text">
                                                Email:
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            autoComplete="email"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Email is Required.",
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message:
                                                        "Provide a valid Email.",
                                                },
                                            })}
                                            placeholder="Your Email"
                                            className="input input-bordered input-accent w-full"
                                            value={email || ""}
                                            onChange={e =>
                                                SetEmail(e.target.value)
                                            }
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

                                        {/* Input Product name */}
                                        <label className="label">
                                            <span className="label-text">
                                                Product Name:
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            autoComplete="Product Name"
                                            {...register("productName", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "product Name is Required.",
                                                },
                                            })}
                                            placeholder="Product Name"
                                            className="input input-bordered input-accent w-full"
                                        />
                                        {errors.productName?.type ===
                                            "required" && (
                                            <span className="label-text-alt text-lg text-red-500">
                                                {errors.productName.message}{" "}
                                            </span>
                                        )}
                                        {/* --- --- --- */}

                                        {/* Input Minimum Quantity */}
                                        <label className="label">
                                            <span className="label-text">
                                                Minimum Quantity :
                                            </span>
                                        </label>
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
                                        {errors.minimumQuantity?.type ===
                                            "required" && (
                                            <span className="label-text-alt text-lg text-red-500">
                                                {errors.minimumQuantity.message}{" "}
                                            </span>
                                        )}
                                        {/* --- --- --- */}

                                        {/* Input Available Quantity */}
                                        <label className="label">
                                            <span className="label-text">
                                                Available Quantity:
                                            </span>
                                        </label>
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
                                        {errors.availableQuantity?.type ===
                                            "required" && (
                                            <span className="label-text-alt text-lg text-red-500">
                                                {
                                                    errors.availableQuantity
                                                        .message
                                                }{" "}
                                            </span>
                                        )}
                                        {/* --- --- --- */}

                                        {/* Input Price Per Unit */}
                                        <label className="label">
                                            <span className="label-text">
                                                Price Per Unit:
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            autoComplete="Price Per Unit"
                                            {...register("price", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Price Per Unit is Required.",
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
                                        <label className="label">
                                            <span className="label-text">
                                                Product Description:
                                            </span>
                                        </label>
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
                                        {errors.productDescription?.type ===
                                            "required" && (
                                            <span className="label-text-alt text-lg text-red-500">
                                                {
                                                    errors.productDescription
                                                        .message
                                                }{" "}
                                            </span>
                                        )}
                                        {/* --- --- --- */}
                                    </>

                                    <input
                                        type="submit"
                                        value="Update Product"
                                        className="btn btn-primary w-full"
                                    />
                                </form>
                                {/* -- -- - */}
                            </>

                            {/* -- -- --  */}
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCard;
