import React, { useEffect, useState } from "react";
import useFireBase from "../../hooks/useFirebase";
import Loading from "../../Share/Loading";
import ClientDeleteModal from "./ClientDeleteModal";
import { toast } from "react-toastify";

const MyOrders = () => {
    const { user } = useFireBase();
    const email = user?.email;
    const [allOrders, SetAllOrders] = useState([]);
    const [loading, SetLoading] = useState(false);
    const [deleteModal, SetDeleteModal] = useState(null);
    const [data, SetDelete] = useState(null);
    useEffect(() => {
        SetLoading(true);
        if (email) {
            fetch(
                `https://fierce-savannah-66985.herokuapp.com/clientAllOrders?email=${email}`
            )
                .then(res => res.json())
                .then(r => SetAllOrders(r));
        }
        SetLoading(false);
    }, [email]);
    useEffect(() => {
        if (data) {
            SetLoading(true);
            if (data) {
                const id = data._id;
                fetch(
                    `https://fierce-savannah-66985.herokuapp.com/deleteClientProduct?id=${id}`,
                    {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    }
                )
                    .then(res => res.json())
                    .then(r => {
                        if (r.deletedCount > 0) {
                            toast("Delete Successfully");
                        } else {
                            toast("Try Again");
                        }
                    });
            }
            SetLoading(false);
        }
    }, [data]);
    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <div className="text-center text-2xl my-2">
                You All Orders has been display below with product details.
            </div>
            <hr />
            {/* Table */}
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th className="text-xl font-bold">Sl. No</th>
                        <th className="text-xl font-bold">Name</th>
                        <th className="text-xl font-bold">Quantity</th>
                        <th className="text-xl font-bold">Payment status</th>
                        <th className="text-xl font-bold">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {allOrders?.map((p, i) => (
                        <tr key={i} className={i % 2 === 1 ? "active" : ""}>
                            <th>{i + 1}</th>
                            <th>{p.productName || "N/A"}</th>
                            <th>{p.quantity || "N/A"}</th>
                            <th>{p.payment || "N/A"}</th>
                            <th>
                                <label
                                    htmlFor="client-product-delete"
                                    className="btn modal-button btn-active w-full btn-error mx-auto my-2 btn-sm"
                                    onClick={() => SetDeleteModal(p)}
                                >
                                    Delete
                                </label>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* End Table */}

            {deleteModal && (
                <ClientDeleteModal data={deleteModal} SetDelete={SetDelete} />
            )}
        </div>
    );
};

export default MyOrders;
