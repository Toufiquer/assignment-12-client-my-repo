import React from "react";
import { useForm } from "react-hook-form";

const ModalUserUpdate = ({ u, SetRole }) => {
    // Use Form for design and validate
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = e => {
        const user = {
            name: u.name,
            email: u.email,
            role: e.role,
        };
        SetRole(user);
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
                        Update User Role
                    </div>
                    <label
                        htmlFor="user-update"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <form
                        className="flex flex-col w-full lg:w-2/4 mx-auto gap-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <>
                            {/* Input Select */}

                            <select
                                autoComplete="role"
                                {...register("role", {
                                    required: {
                                        value: true,
                                        message: "Role is Required.",
                                    },
                                })}
                                className="select select-info w-full"
                            >
                                <option disabled defaultValue>
                                    Select a Role For User.
                                </option>
                                <option>Admin</option>
                                <option>Client</option>
                                <option>VIP Client</option>
                            </select>
                            {errors.role?.type === "required" && (
                                <span className="label-text-alt text-lg text-red-500">
                                    {errors.role.message}{" "}
                                </span>
                            )}
                            {/* --- --- --- */}
                        </>
                        <input
                            type="submit"
                            value="Update"
                            className="btn btn-primary w-full"
                        />
                    </form>
                    {/* -- -- - */}
                </div>
            </div>
        </div>
    );
};

export default ModalUserUpdate;
