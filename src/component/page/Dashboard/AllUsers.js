import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAllUsers from "../../hooks/useAllUsers";
import Loading from "../../Share/Loading";
import ModalUserDelete from "./ModalUserDelete";
import ModalUserUpdate from "./ModalUserUpdate";

const AllUsers = () => {
    const [allUsers, isLoading, refetch] = useAllUsers();
    const [modal, SetModal] = useState(null);
    const [deleteModal, SetDeleteModal] = useState(null);
    const [userRole, SetRole] = useState(null);
    const [userDelete, SetDelete] = useState(null);
    const [loading, SetLoading] = useState(false);
    useEffect(() => {
        if (userRole) {
            SetLoading(true);
            fetch("https://fierce-savannah-66985.herokuapp.com/updateUser", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userRole),
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
        if (userDelete) {
            SetLoading(true);
            fetch("https://fierce-savannah-66985.herokuapp.com/deleteUser", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userDelete),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.result.deletedCount) {
                        toast.warning("Delete Successfully");
                        refetch();
                    }
                });

            SetLoading(false);
        }
    }, [userRole, refetch, userDelete]);
    if (isLoading || loading) {
        return <Loading />;
    }
    const handleUpdate = e => {
        SetModal(e);
    };
    const SetDelModal = e => {
        SetDeleteModal(e);
    };
    return (
        <div className="container mx-auto">
            <div className="text-center text-2xl my-2 mt-0">Manage Users</div>
            <hr />
            {/* Table */}
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr className="sticky top-[-20px] z-20">
                        <th className="text-xl font-bold">Sl. No</th>
                        <th className="text-xl font-bold"> Name</th>
                        <th className="text-xl font-bold">Email</th>
                        <th className="text-xl font-bold">Role</th>
                        <th className="text-xl font-bold">Update</th>
                        <th className="text-xl font-bold">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {allUsers && (
                        <>
                            {allUsers?.map((u, i) => (
                                <tr
                                    key={u._id}
                                    className={i % 2 === 1 ? "active" : ""}
                                >
                                    <th>{i + 1}</th>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.role}</td>
                                    <td>
                                        {/* <!-- The button to open modal --> */}
                                        <label
                                            htmlFor="user-update"
                                            onClick={() => handleUpdate(u)}
                                            className="btn modal-button btn-active btn-ghost btn-sm"
                                        >
                                            Update
                                        </label>
                                    </td>
                                    <td>
                                        {/* <!-- The button to open modal --> */}
                                        <label
                                            htmlFor="user-delete"
                                            className="btn modal-button btn-active w-full btn-error mx-auto my-2 btn-sm"
                                            onClick={() => SetDelModal(u)}
                                        >
                                            Delete
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </>
                    )}
                </tbody>
            </table>
            {/* End Table */}
            {modal && <ModalUserUpdate u={modal} SetRole={SetRole} />}
            {deleteModal && (
                <ModalUserDelete data={deleteModal} SetDelete={SetDelete} />
            )}
        </div>
    );
};

export default AllUsers;
