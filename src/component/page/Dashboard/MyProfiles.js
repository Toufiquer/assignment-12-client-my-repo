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
            fetch("https://fierce-savannah-66985.herokuapp.com/updateUser", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "access-token-12"
                    )}`,
                },
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
            <div className="p-4 my-6">
                <div className="text-center text-4xl my-4">
                    User Information
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[_1fr,_3fr]">
                    <div className="border p-2">
                        <div className="avatar">
                            <div className="rounded">
                                <img
                                    className="w-full h-full"
                                    src={userData?.img}
                                    alt={userData.name}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border p-2">
                        <div className="text-left">
                            <div className="text-2xl">
                                Name : {userData.name || "N/A"}
                            </div>
                            <div className="text-2xl">
                                Email : {userData.email || "N/A"}
                            </div>
                            <div className="text-2xl">
                                Role : {userData.role || "N/A"}
                            </div>
                            <div className="text-2xl">
                                Education : {userData.education || "N/A"}
                            </div>
                            <div className="text-2xl">
                                Location : {userData.location || "N/A"}
                            </div>
                            <div className="text-2xl">
                                Phone Number : {userData.phoneNumber || "N/A"}
                            </div>
                            <div className="text-2xl">
                                LinkedIn id : {userData.linkedInId || "N/A"}
                            </div>
                        </div>
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
            {update && (
                <UpdateProfile
                    profile={update}
                    SetData={SetData}
                    SetLoading={SetLoading}
                />
            )}
        </>
    );
};

export default MyProfiles;
