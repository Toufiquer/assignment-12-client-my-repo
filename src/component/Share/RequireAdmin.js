import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useFireBase from "../hooks/useFirebase";
import auth from "./firebase.init";
import Loading from "./Loading";
const RequireAdmin = ({ children }) => {
    const { user } = useFireBase();
    const [admin, SetAdmin] = useState({});
    const location = useLocation();
    const [loading, SetLoading] = useState(false);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            SetLoading(true);
            fetch(
                `https://fierce-savannah-66985.herokuapp.com/user?email=${email}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "access-token-12"
                        )}`,
                    },
                }
            )
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        localStorage.removeItem("access-token");
                        signOut(auth);
                    } else {
                        return res.json();
                    }
                })
                .then(r => {
                    SetAdmin(r.result);
                    SetLoading(false);
                });
        }
    }, [user]);
    if (loading) {
        return <Loading />;
    }
    const role = admin?.role;
    if (role) {
        if (role === "Admin") {
            return children;
        } else {
            return (
                <Navigate
                    to="/login"
                    state={{ from: location }}
                    replace
                ></Navigate>
            );
        }
    }
};

export default RequireAdmin;
