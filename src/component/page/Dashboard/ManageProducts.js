import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Share/Loading";

const ManageProducts = () => {
    const {
        data: allUsers,
        isLoading,
        refetch,
    } = useQuery("doctorServices", () =>
        fetch(`http://localhost:3500/allProducts`).then(res => res.json())
    );
    if (isLoading) {
        <Loading></Loading>;
    }
    const handleDelete = e => {
        console.log(e);
        refetch();
    };
    return (
        <div>
            {/* Table */}
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th className="text-xl font-bold">Sl. No</th>
                        <th className="text-xl font-bold">Product Name</th>
                        <th className="text-xl font-bold">Email</th>
                        <th className="text-xl font-bold">Role</th>
                        <th className="text-xl font-bold">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {allUsers?.map((p, i) => (
                        <tr key={i} className={i % 2 === 1 ? "active" : ""}>
                            <th>{i + 1}</th>
                            <td>{p.name}</td>
                            <td>{p.email}</td>
                            <td>{p.email}</td>
                            <td>
                                <span
                                    className="btn flex items-center justify-center text-2xl bg-red-500"
                                    onClick={() => handleDelete(p.email)}
                                >
                                    X
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* End Table */}
        </div>
    );
};

export default ManageProducts;
