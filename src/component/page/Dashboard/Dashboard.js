import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
                        for="dashBoard-btn"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {/* Nav for Client */}
                        <li>
                            <Link to="/dashboard">My Orders</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/myReview">My Review</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/myProfiles">My Profile</Link>
                        </li>
                        {/* -- -- - */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
