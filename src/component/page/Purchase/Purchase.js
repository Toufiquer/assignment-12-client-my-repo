import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const Purchase = () => {
    const id = useParams();
    console.log(id);
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
                                    <h1 className="text-5xl font-bold">
                                        Box Office News!
                                    </h1>
                                    <p className="py-6">
                                        Provident cupiditate voluptatem et in.
                                        Quaerat fugiat ut assumenda excepturi
                                        exercitationem quasi. In deleniti eaque
                                        aut repudiandae et a id nisi.
                                    </p>
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
                                Min Quantity : {" 500"}
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
