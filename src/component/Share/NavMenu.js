import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { signOut } from "firebase/auth";
const NavMenu = () => {
    const [user] = useAuthState(auth);
    // console.log(user?.uid);
    const handleSignOut = () => {
        localStorage.removeItem("access-token-12");
        signOut(auth);
    };
    return (
        <div className="bg-base-100 sticky top-0 z-50">
            <div className="container mx-auto">
                <div className="navbar bg-base-100 justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            {/* Icon */}
                            <label
                                tabIndex="0"
                                className="btn  btn-circle swap swap-rotate lg:hidden"
                            >
                                {/* <!-- this hidden checkbox controls the state --> */}
                                <input type="checkbox" />

                                {/* <!-- hamburger icon --> */}
                                <svg
                                    className="swap-off fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                </svg>

                                {/* <!-- close icon --> */}
                                <svg
                                    className="swap-on fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 512 512"
                                >
                                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                </svg>
                            </label>
                            {/* -- -- - */}
                            <ul
                                tabIndex="0"
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {/* Drop Down menu */}

                                {/* <li tabIndex="0">
                                <Link to="/" className="justify-between">
                                    Parent
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </Link>
                                <ul className="p-2">
                                    <li>
                                        <Link to="/">Submenu 1</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Submenu 2</Link>
                                    </li>
                                </ul>
                            </li> */}
                                {/* End ****** */}

                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/products">Products </Link>
                                </li>
                                <li>
                                    <Link to="/blogs">Blogs</Link>
                                </li>
                                {user?.uid && (
                                    <li>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                )}
                                <li>
                                    {user?.uid ? (
                                        <button onClick={handleSignOut}>
                                            Sign Out
                                        </button>
                                    ) : (
                                        <Link to="/logIn">Login</Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <Link
                            to="/"
                            className="btn btn-ghost normal-case text-xl"
                        >
                            Wholesale Master
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {/* Drop Drown */}

                            {/* <li tabIndex="0">
                            <Link to="/">
                                Parent
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </Link>
                            <ul className="p-2">
                                <li>
                                    <Link to="/">Submenu 1</Link>
                                </li>
                                <li>
                                    <Link to="/">Submenu 2</Link>
                                </li>
                            </ul>
                        </li> */}
                            {/* End Drop Drown */}
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/products">Products </Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            {user?.uid && (
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                            )}
                            <li>
                                {user?.uid ? (
                                    <button onClick={handleSignOut}>
                                        Sign Out
                                    </button>
                                ) : (
                                    <Link to="/logIn">Login</Link>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="nav-end">
                        <label
                            htmlFor="dashBoard-btn"
                            tabIndex="1"
                            className="btn btn-ghost drawer-button lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;
