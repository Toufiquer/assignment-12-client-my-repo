import { useEffect, useState } from "react";
import { useQuery } from "react-query";
const useAllUsers = () => {
    const [allUsers, SetAllUsers] = useState([]);

    const {
        data: allUsersData,
        isLoading,
        refetch,
    } = useQuery("allUsers", () =>
        fetch(`http://localhost:3500/allUsers`).then(res => res.json())
    );
    useEffect(() => {
        SetAllUsers(allUsersData);
    }, [allUsersData]);
    return [allUsers, isLoading, refetch];
};
export default useAllUsers;
