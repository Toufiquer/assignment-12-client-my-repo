import React from "react";
import { Navigate, useLocation } from "react-router";
import useFireBase from "../hooks/useFirebase";
const RequireAuth = ({ children }) => {
    const { user } = useFireBase();
    const location = useLocation();
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default RequireAuth;
