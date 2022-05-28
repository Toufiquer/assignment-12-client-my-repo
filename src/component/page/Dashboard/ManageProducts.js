import React, { useState } from "react";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";
import useUrl from "../../hooks/useUrl";
import Loading from "../../Share/Loading";
import DeleteProductModal from "./DeleteProductModal";
import ModalCard from "./ModalCard";

const ManageProducts = () => {
    const [url] = useUrl();
    const [data, SetData] = useState(null);
    const [modal, SetModal] = useState(null);
    const [delModal, SetDelModal] = useState(null);
    const [confirmDel, SetConfirmDel] = useState(null);
    const [allProducts, isLoading, refetch] = useProducts();
    const [loading, SetLoading] = useState(false);
    if (isLoading || loading) {
        <Loading></Loading>;
    }
    const handleUpdate = e => {
        SetModal(e);
    };
    if (data) {
        SetLoading(true);
        const img = data.img[0];
        const formData = new FormData();
        formData.append("image", img);
        fetch(url, { method: "POST", body: formData })
            .then(res => res.json())
            .then(r => {
                if (r.success) {
                    const imgUrl = r.data.url;
                    data.img = imgUrl;
                    console.log(data);
                    // Send to server

                    fetch("http://localhost:3500/updateProduct", {
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
                            SetLoading(false);
                            if (data.modifiedCount) {
                                toast("Update Successfully");
                                refetch();
                            }
                        });
                }
            })
            .catch(err => console.error(err));
    }
    if (confirmDel) {
        fetch("http://localhost:3500/deleteProduct", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: confirmDel }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.warning("Delete Successfully");
                    refetch();
                }
            });
    }
    return (
        <div className="container mx-auto">
            <div className="text-center text-2xl my-2 mt-0">
                Manage Products
            </div>
            <hr />
            {/* Table */}
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr className="sticky top-[-20px] z-20">
                        <th className="text-xl font-bold">Sl. No</th>
                        <th className="text-xl font-bold">Product Name</th>
                        <th className="text-xl font-bold">Price</th>
                        <th className="text-xl font-bold">Minimum Order</th>
                        <th className="text-xl font-bold">
                            Available Quantity
                        </th>
                        <th className="text-xl font-bold">Update</th>
                        <th className="text-xl font-bold">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {allProducts?.map((p, i) => (
                        <tr key={p._id} className={i % 2 === 1 ? "active" : ""}>
                            <th>{i + 1}</th>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.minimumQuantity}</td>
                            <td>{p.availableQuantity}</td>
                            <td>
                                {/* <!-- The button to open modal --> */}
                                <label
                                    htmlFor="product-update"
                                    onClick={() => handleUpdate(p)}
                                    className="btn modal-button btn-active btn-ghost btn-sm"
                                >
                                    Update
                                </label>
                            </td>
                            <td>
                                {/* <!-- The button to open modal --> */}
                                <label
                                    for="modal-delete"
                                    className="btn modal-button btn-active w-full btn-error mx-auto my-2 btn-sm"
                                    onClick={() => SetDelModal(p)}
                                >
                                    Delete
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* End Table */}
            {modal && <ModalCard product={modal} SetData={SetData} />}
            {delModal && (
                <DeleteProductModal
                    product={delModal}
                    SetConfirmDel={SetConfirmDel}
                />
            )}
        </div>
    );
};

export default ManageProducts;
