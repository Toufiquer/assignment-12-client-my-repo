import "./App.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import NavMenu from "./component/Share/NavMenu";
import { Route, Routes } from "react-router-dom";
import Home from "./component/page/Home/Home";
import NothingFound from "./component/page/NothingFound/NothingFound";
import LogIn from "./component/page/LogIn/LogIn";
function App() {
    const queryClient = new QueryClient();
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <NavMenu />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/logIn" element={<LogIn />}></Route>
                    <Route path="*" element={<NothingFound />}></Route>
                </Routes>
                <ToastContainer />
            </QueryClientProvider>
        </div>
    );
}

export default App;
