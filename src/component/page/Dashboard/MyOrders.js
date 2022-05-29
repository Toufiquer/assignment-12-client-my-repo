import React, { useEffect, useState } from "react";
import useAllOrders from "../../hooks/useAllOrders";
import useFireBase from "../../hooks/useFirebase";
import Loading from "../../Share/Loading";

const MyOrders = () => {
    const { user } = useFireBase();
    const email = user?.email;
    const [allOrders, SetAllOrders] = useState([]);
    useEffect(() => {
        if (email) {
            fetch(
                `https://fierce-savannah-66985.herokuapp.com/clientAllOrders?email=${email}`
            )
                .then(res => res.json())
                .then(r => SetAllOrders(r));
        }
    }, [email]);
    const handleDelete = e => {
        // console.log(e);
    };
    // if (isLoading) {
    //     <Loading />;
    // }
    // console.log(allOrders[0]);
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
                                <button className="btn modal-button btn-active w-full btn-error mx-auto my-2 btn-sm">
                                    Delete
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* End Table */}
        </div>
    );
};

// address: "fg"
// message: "fd sag fegv egv ers"
// quantity: "6000"
export default MyOrders;
