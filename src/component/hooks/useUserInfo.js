import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { signOut } from "firebase/auth";
import auth from "../Share/firebase.init";
const useUserInfo = user => {
    // console.log(user);
    const email = user?.user?.email;
    const [role, SetRole] = useState("");
    const [userData, SetUserData] = useState({});
    // console.log(email);
    const {
        data: fetchData,
        isLoading,
        refetch,
    } = useQuery(["userData", email], () =>
        fetch(
            `https://fierce-savannah-66985.herokuapp.com/user?email=${email}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "access-token-12"
                    )}`,
                },
            }
        ).then(res => {
            if (res.status === 401 || res.status === 403) {
                localStorage.removeItem("access-token");
                signOut(auth);
            } else {
                return res.json();
            }
        })
    );
    useEffect(() => {
        if (fetchData?.result?._id) {
            SetRole(fetchData.result.role);
            SetUserData(fetchData.result);
        }
    }, [fetchData]);
    return [role, userData, refetch, isLoading];
};
export default useUserInfo;
