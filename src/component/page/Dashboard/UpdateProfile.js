import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UpdateProfile = ({ profile, SetData }) => {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [education, SetEducation] = useState("");
    const [location, SetLocation] = useState("");
    const [phoneNumber, SetPhoneNumber] = useState("");
    const [linkedInId, SetLinkedInId] = useState("");
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
        p.education = education;
        p.location = location;
        p.phoneNumber = phoneNumber;
        p.linkedInId = linkedInId;
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

                                {/* Input Person Education */}
                                <label className="label">
                                    <span className="label-text">
                                        Education:
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    autoComplete="education"
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: "Education is Required.",
                                        },
                                    })}
                                    placeholder="Your Education"
                                    className="input input-bordered input-accent w-full"
                                    value={education || ""}
                                    onChange={e => SetEducation(e.target.value)}
                                />
                                {errors.education?.type === "required" && (
                                    <span className="label-text-alt text-lg text-red-500">
                                        {errors.education.message}{" "}
                                    </span>
                                )}
                                {/* --- --- --- */}

                                {/* Input Person Location */}
                                <label className="label">
                                    <span className="label-text">
                                        Location:
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    autoComplete="location"
                                    {...register("location", {
                                        required: {
                                            value: true,
                                            message: "Location is Required.",
                                        },
                                    })}
                                    placeholder="Your Location"
                                    className="input input-bordered input-accent w-full"
                                    value={location || ""}
                                    onChange={e => SetLocation(e.target.value)}
                                />
                                {errors.location?.type === "required" && (
                                    <span className="label-text-alt text-lg text-red-500">
                                        {errors.location.message}{" "}
                                    </span>
                                )}
                                {/* --- --- --- */}

                                {/* Input Person Phone Number */}
                                <label className="label">
                                    <span className="label-text">
                                        Phone Number:
                                    </span>
                                </label>
                                <input
                                    type="number"
                                    autoComplete="phoneNumber"
                                    {...register("phoneNumber", {
                                        required: {
                                            value: true,
                                            message:
                                                "Phone Number is Required.",
                                        },
                                    })}
                                    placeholder="Your Phone Number"
                                    className="input input-bordered input-accent w-full"
                                    value={phoneNumber || ""}
                                    onChange={e =>
                                        SetPhoneNumber(e.target.value)
                                    }
                                />
                                {errors.phoneNumber?.type === "required" && (
                                    <span className="label-text-alt text-lg text-red-500">
                                        {errors.phoneNumber.message}{" "}
                                    </span>
                                )}
                                {/* --- --- --- */}

                                {/* Input Person LinkedIn id */}
                                <label className="label">
                                    <span className="label-text">
                                        LinkedIn id:
                                    </span>
                                </label>
                                <input
                                    type="url"
                                    autoComplete="linkedInId"
                                    {...register("linkedInId", {
                                        required: {
                                            value: true,
                                            message: "LinkedIn id is Required.",
                                        },
                                    })}
                                    placeholder="Your LinkedIn id"
                                    className="input input-bordered input-accent w-full"
                                    value={linkedInId || ""}
                                    onChange={e =>
                                        SetLinkedInId(e.target.value)
                                    }
                                />
                                {errors.linkedInId?.type === "required" && (
                                    <span className="label-text-alt text-lg text-red-500">
                                        {errors.linkedInId.message}{" "}
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
