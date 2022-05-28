import { useEffect, useState } from "react";
import { useQuery } from "react-query";
const useAllUsers = () => {
    const [allUsers, SetAllUsers] = useState([]);

    const {
        data: allUsersData,
        isLoading,
        refetch,
    } = useQuery("allUsers", () =>
        fetch(`https://fierce-savannah-66985.herokuapp.com/allUsers`).then(
            res => res.json()
        )
    );
    useEffect(() => {
        SetAllUsers(allUsersData);
    }, [allUsersData]);
    return [allUsers, isLoading, refetch];
};
export default useAllUsers;
