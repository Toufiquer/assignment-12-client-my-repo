import "./App.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import NavMenu from "./component/Share/NavMenu";
import { Route, Routes } from "react-router-dom";
import Home from "./component/page/Home/Home";
import NothingFound from "./component/page/NothingFound/NothingFound";
import LogIn from "./component/page/LogIn/LogIn";
import SignUp from "./component/page/LogIn/SignUp";
import Purchase from "./component/page/Purchase/Purchase";
import RequireAuth from "./component/Share/RequireAuth";
import Dashboard from "./component/page/Dashboard/Dashboard";
import MyOrders from "./component/page/Dashboard/MyOrders";
import MyReview from "./component/page/Dashboard/MyReview";
import MyProfiles from "./component/page/Dashboard/MyProfiles";
import ManageAllOrders from "./component/page/Dashboard/ManageAllOrders";
import AddAProducts from "./component/page/Dashboard/AddAProducts";
import ManageProducts from "./component/page/Dashboard/ManageProducts";
import AllUsers from "./component/page/Dashboard/AllUsers";
import "react-toastify/dist/ReactToastify.css";
import Products from "./component/page/Products/Products";
import Blogs from "./component/page/Blogs/Blogs";
import Portfolio from "./component/page/Portfolio/Portfolio";
function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <NavMenu />
            <div className="overflow-x-hidden">
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/logIn" element={<LogIn />}></Route>
                        <Route path="/signUp" element={<SignUp />}></Route>
                        <Route path="/products" element={<Products />}></Route>
                        <Route path="/blogs" element={<Blogs />}></Route>
                        <Route
                            path="/portfolio"
                            element={<Portfolio />}
                        ></Route>
                        <Route
                            path="/products/purchase/:id"
                            element={
                                <RequireAuth>
                                    <Purchase />
                                </RequireAuth>
                            }
                        ></Route>
                        <Route
                            path="/purchase/:id"
                            element={
                                <RequireAuth>
                                    <Purchase />
                                </RequireAuth>
                            }
                        ></Route>
                        <Route
                            path="/dashboard"
                            element={
                                <RequireAuth>
                                    <Dashboard />
                                </RequireAuth>
                            }
                        >
                            <Route
                                index
                                element={<MyProfiles></MyProfiles>}
                            ></Route>
                            <Route
                                path="myReview"
                                element={<MyReview></MyReview>}
                            ></Route>
                            <Route
                                path="myOrders"
                                element={<MyOrders></MyOrders>}
                            ></Route>
                            {/* For Admin */}
                            <Route
                                path="manageAllOrders"
                                element={<ManageAllOrders></ManageAllOrders>}
                            ></Route>
                            <Route
                                path="addAProducts"
                                element={<AddAProducts></AddAProducts>}
                            ></Route>
                            <Route
                                path="manageProducts"
                                element={<ManageProducts></ManageProducts>}
                            ></Route>
                            <Route
                                path="allUsers"
                                element={<AllUsers></AllUsers>}
                            ></Route>
                        </Route>
                        <Route path="*" element={<NothingFound />}></Route>
                    </Routes>
                    <ToastContainer />
                </QueryClientProvider>
            </div>
        </>
    );
}

export default App;
