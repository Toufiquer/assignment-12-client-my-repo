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
                        <Route
                            path="/purchase"
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
                        <Route path="*" element={<NothingFound />}></Route>
                    </Routes>
                    <ToastContainer />
                </QueryClientProvider>
            </div>
        </>
    );
}

export default App;
