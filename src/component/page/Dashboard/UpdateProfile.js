import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UpdateProfile = ({ profile, SetData }) => {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    // console.log(profile);
    useEffect(() => {
        SetName(profile.name);
        SetEmail(profile.email);
    }, [profile]);
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -

    // Use Form for design and validate
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -

    // Handle Submit
    const onSubmit = p => {
        p.name = name;
        p.email = email;
        SetData(p);
    };
    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input
                type="checkbox"
                id="user-update"
                className="modal-toggle z-60"
            />
            <div className="modal pt-14">
                <div className="modal-box relative">
                    <div className="text-center text-2xl my-2">
                        Update Profile
                    </div>
                    <label
                        htmlFor="user-update"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <>
                        {/* Form */}
                        <form
                            className="flex flex-col w-full mx-auto gap-4"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            {/* Input Person Name */}
                            <label className="label">
                                <span className="label-text">Name:</span>
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
                                        message: "Provide a valid Name.",
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
                                    className="input input-bordered input-accent w-full"
                                    value={email || ""}
                                    onChange={e => SetEmail(e.target.value)}
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
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
