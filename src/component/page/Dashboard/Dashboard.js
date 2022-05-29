import React from "react";
import { Link, Outlet } from "react-router-dom";
import useFireBase from "../../hooks/useFirebase";
import useUserInfo from "../../hooks/useUserInfo";

const Dashboard = () => {
    const user = useFireBase();
    const [userRole] = useUserInfo(user);
    // let role = "admin";
    // console.log(userRole, "admin");
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input
                    id="dashBoard-btn"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col bg-base-200 p-6">
                    {/* <!-- Page content here --> */}
                    <div className="container">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="dashBoard-btn"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to="/dashboard">My Profile</Link>
                        </li>
                        {userRole === "Client" && (
                            <>
                                {/* Nav for Client */}
                                <li>
                                    <Link to="/dashboard/myReview">
                                        My Review
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/myOrders">
                                        My Orders
                                    </Link>
                                </li>
                            </>
                        )}
                        {/* -- -- - */}
                        {/* Nav for admin */}
                        {userRole === "Admin" && (
                            <>
                                {/* Nav for Client */}
                                <li>
                                    <Link to="/dashboard/manageAllOrders">
                                        Manage All Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/addAProducts">
                                        Add a Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/manageProducts">
                                        Manage Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/allUsers">
                                        All Users
                                    </Link>
                                </li>
                            </>
                        )}
                        {/* -- -- - */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
