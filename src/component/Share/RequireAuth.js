import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router";
import useFireBase from "../hooks/useFirebase";
import auth from "./firebase.init";
const RequireAuth = ({ children }) => {
    const [userAuth] = useAuthState(auth);
    const { user } = useFireBase();
    console.log(user, userAuth);
    const location = useLocation();
    if (user || userAuth) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default RequireAuth;
