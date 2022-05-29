import React from "react";

const ClientDeleteModal = ({ data, SetDelete }) => {
    return (
        <div>
            <div>
                {/* <!-- Put this part before </body> tag --> */}
                <input
                    type="checkbox"
                    id="client-product-delete"
                    className="modal-toggle z-60"
                />
                <div className="modal pt-14">
                    <div className="modal-box relative">
                        <div className="text-center text-2xl my-2">
                            Are you sure?
                        </div>
                        <label
                            htmlFor="client-product-delete"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <>
                            {/* Text */}
                            <div className="w-full flex items-center">
                                <label
                                    className="btn modal-button btn-active w-1/2 btn-error mx-auto my-2 btn-sm"
                                    onClick={() => SetDelete(data)}
                                >
                                    Delete
                                </label>
                            </div>
                            {/* -- -- - */}
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDeleteModal;
