import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ModalCard = () => {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    // Use Form for design and validate
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
