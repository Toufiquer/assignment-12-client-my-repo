import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAllOrders from "../../hooks/useAllOrders";
import Loading from "../../Share/Loading";
import ClientDeleteModal from "./ClientDeleteModal";

const ManageAllOrders = () => {
    const [loading, SetLoading] = useState(false);
    const [deleteModal, SetDeleteModal] = useState(null);
    const [data, SetDelete] = useState(null);
    const [addOrders, isLoading, refetch] = useAllOrders();
    useEffect(() => {
        if (data) {
            SetLoading(true);
            if (data) {
                const id = data._id;
                fetch(
                    `https://fierce-savannah-66985.herokuapp.com/deleteClientProduct?id=${id}`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${localStorage.getItem(
                                "access-token-12"
                            )}`,
                        },
                    }
                )
                    .then(res => res.json())
                    .then(r => {
                        if (r.deletedCount > 0) {
                            toast("Delete Successfully");
                            refetch();
                        } else {
                            toast("Try Again");
                        }
                    });
            }
            SetLoading(false);
        }
    }, [data, refetch]);
    if (isLoading || loading) {
        return <Loading />;
    }
    const handleDelete = e => {
        // console.log(e);
    };
    return (
        <div>
            <div className="container">
                {/* Table */}
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className="text-xl font-bold">Sl. No</th>
                            <th className="text-xl font-bold">Name</th>
                            <th className="text-xl font-bold">Email</th>
                            <th className="text-xl font-bold">Quantity</th>
                            <th className="text-xl font-bold">Payment</th>
                            <th className="text-xl font-bold">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {addOrders?.map((p, i) => (
                            <tr key={i} className={i % 2 === 1 ? "active" : ""}>
                                <th>{i + 1}</th>
                                <td>{p.name}</td>
                                <td>{p.email}</td>
                                <td>{p.quantity}</td>
                                <td>{p.payment || "Not paid"}</td>
                                <td>
                                    <label
                                        htmlFor="client-product-delete"
                                        className="btn modal-button btn-active w-full btn-error mx-auto my-2 btn-sm"
                                        onClick={() => SetDeleteModal(p)}
                                    >
                                        Delete
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* End Table */}
                {deleteModal && (
                    <ClientDeleteModal
                        data={deleteModal}
                        SetDelete={SetDelete}
                    />
                )}
            </div>
        </div>
    );
};

export default ManageAllOrders;
