import React, { useState } from "react";
import img from "../../../assets/images/img.png";
import auth from "../../Share/firebase.init";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../../Share/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
const SignUp = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [pass, SetPass] = useState("");
    const [conErr, SetError] = useState(null);
    // Error
    let err;
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -

    // Use Form for design and validate
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -

    // Google Log in with one click google
    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(auth);
    // Google Log in with email and password
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -
    const [token] = useToken(user || gUser);
    // Loading
    if (gLoading || loading || updating) {
        return <Loading />;
    }
    // Error
    if (gError || error || uError) {
        err = gError?.message || error?.message || uError?.message;
        console.log(err);
        SetError(err);
    }
    // After get the token
    if (token) {
        navigate(from, { replace: true });
    }
    // --- -- -- -- -- -- -- - - - -  -  -  -  -   -    -

    // Handle Submit
    const onSubmit = async e => {
        await createUserWithEmailAndPassword(e.email, e.password);
        await updateProfile({ displayName: e.name });
    };

    return (
        <div className="container mx-auto">
            <div
                className="my-6 min-h-full py-6"
                style={{ background: `url(${img})` }}
            >
                <div className="text-center py-6">
                    <div className="text-2xl font-bold">Sign Up</div>
                </div>
                <form
                    className="flex flex-col w-full lg:w-2/4 mx-auto gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* Input Name */}
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
                        {/* Input Email */}
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
                        {/* Input Password */}
                        <input
                            type="password"
                            autoComplete="current-password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required.",
                                },
                            })}
                            placeholder="Your Password"
                            className="input input-bordered input-accent w-full"
                            onChange={e => SetPass(e.target.value)}
                            value={pass || ""}
                        />
                        {errors.password?.type === "required" && (
                            <span className="label-text-alt text-lg text-red-500">
                                {errors.password.message}{" "}
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
                    {/* Login Button */}
                    <span className="label-text-alt text-lg">
                        Already a member?{" "}
                        <Link to="/logIn" className="link">
                            Log In
                        </Link>
                    </span>
                    <input
                        type="submit"
                        value="Sign Up"
                        className="btn btn-primary w-full"
                    />
                </form>
                <div className="divider">OR</div>
                <div
                    onClick={() => signInWithGoogle()}
                    className="grid btn rounded-box place-items-center w-full lg:w-1/2 mx-auto bg-transparent"
                >
                    Continue with Google
                </div>
            </div>
        </div>
    );
};

export default SignUp;
