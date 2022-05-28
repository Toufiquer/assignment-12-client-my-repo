import React from "react";

const ModalUserDelete = ({ u, SetDelete }) => {
    return (
        <div>
            <div>
                {/* <!-- Put this part before </body> tag --> */}
                <input
                    type="checkbox"
                    id="user-delete"
                    className="modal-toggle z-60"
                />
                <div className="modal pt-14">
                    <div className="modal-box relative">
                        <div className="text-center text-2xl my-2">
                            Are you sure?
                        </div>
                        <label
                            htmlFor="user-delete"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <>
                            {/* Text */}
                            <div className="w-full flex items-center">
                                <button
                                    className="btn modal-button btn-active w-1/2 btn-error mx-auto my-2 btn-sm"
                                    onClick={() => SetDelete(u)}
                                >
                                    Delete
                                </button>
                            </div>
                            {/* -- -- - */}
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalUserDelete;
