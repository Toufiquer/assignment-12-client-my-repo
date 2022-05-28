import { useEffect, useState } from "react";
import { useQuery } from "react-query";

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
        fetch(`http://localhost:3500/user?email=${email}`).then(res =>
            res.json()
        )
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
