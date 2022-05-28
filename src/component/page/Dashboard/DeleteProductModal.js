import React from "react";

const DeleteProductModal = ({ product, SetConfirmDel }) => {
    console.log(product);
    const handleDelete = id => {
        SetConfirmDel(id);
    };
    return (
        <div>
            {/* Modal for Delete */}
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="modal-delete" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        for="modal-delete"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">Are You sure?</h3>
                    <p className="py-4">Name: {product.productName}</p>

                    <label
                        for="modal-delete"
                        className="btn modal-button btn-active w-full btn-error mx-auto my-2 btn-sm"
                        onClick={() => handleDelete(product._id)}
                    >
                        Delete
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;
