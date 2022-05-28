import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useFireBase from "../../hooks/useFirebase";
import useUserInfo from "../../hooks/useUserInfo";
import Loading from "../../Share/Loading";
import UpdateProfile from "./UpdateProfile";

const MyProfiles = () => {
    const user = useFireBase();
    const [, userData, refetch, isLoading] = useUserInfo(user);
    const [update, SetUpdate] = useState(null);
    const [loading, SetLoading] = useState(null);
    const [data, SetData] = useState({});
    const handleUpdate = p => {
        SetUpdate(p);
    };
    useEffect(() => {
        if (data.email) {
            SetLoading(true);
            fetch("http://localhost:3500/updateUser", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.result.modifiedCount) {
                        toast("Update Successfully");
                        refetch();
                    }
                });
            SetLoading(false);
        }
    }, [data, refetch]);
    if (loading || isLoading) {
        return <Loading />;
    }
    return (
        <>
            <div>
                <div className="text-center text-4xl my-4">
                    User Information
                </div>
                <div className="border p-4 my-6">
                    <div className="text-left">
                        <div className="text-2xl">Name : {userData.name}</div>
                        <div className="text-2xl">Email : {userData.email}</div>
                        <div className="text-2xl">Role : {userData.role}</div>
                    </div>
                </div>
            </div>
            <div>
                <label
                    htmlFor="user-update"
                    onClick={() => handleUpdate(userData)}
                    className="btn modal-button btn-active btn-ghost btn-sm"
                >
                    Update
                </label>
            </div>
            {update && <UpdateProfile profile={update} SetData={SetData} />}
        </>
    );
};

export default MyProfiles;
