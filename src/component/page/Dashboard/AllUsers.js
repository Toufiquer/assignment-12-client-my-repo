import React from "react";

const AllUsers = () => {
    const allUsers = [
        { name: "Name", email: "email" },
        { name: "Name", email: "email" },
        { name: "Name", email: "email" },
        { name: "Name", email: "email" },
    ];
    const mkAdmin = e => {
        console.log(e);
    };
    const mkClient = e => {
        console.log(e);
    };
    const handleDelete = e => {
        console.log(e);
    };
    return (
        <div>
            {/* Table */}
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th className="text-xl font-bold">Sl. No</th>
                        <th className="text-xl font-bold">Name</th>
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
                            <td>
                                <span
                                    className="btn flex items-center justify-center"
                                    onClick={() => {
                                        if (p.role !== "admin") {
                                            mkAdmin(p.email);
                                        } else {
                                            mkClient(p.email);
                                        }
                                    }}
                                >
                                    {p.role || "Client"}
                                </span>
                            </td>
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

export default AllUsers;
