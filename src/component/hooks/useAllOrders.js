import { useEffect, useState } from "react";
import { useQuery } from "react-query";
const useAllOrders = () => {
    const [addOrders, SetAllOrders] = useState([]);

    const {
        data: addOrdersData,
        isLoading,
        refetch,
    } = useQuery("adminAllOrders", () =>
        fetch(`https://fierce-savannah-66985.herokuapp.com/adminAllOrders`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem(
                    "access-token-12"
                )}`,
            },
        }).then(res => res.json())
    );
    useEffect(() => {
        SetAllOrders(addOrdersData);
    }, [addOrdersData]);
    return [addOrders, isLoading, refetch];
};
export default useAllOrders;
