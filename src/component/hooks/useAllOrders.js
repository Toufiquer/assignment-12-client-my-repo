import { useEffect, useState } from "react";
import { useQuery } from "react-query";
const useAllOrders = () => {
    const [addOrders, SetAllOrders] = useState([]);

    const {
        data: addOrdersData,
        isLoading,
        refetch,
    } = useQuery("addOrders", () =>
        fetch(
            `https://fierce-savannah-66985.herokuapp.com/adminAllOrders`
        ).then(res => res.json())
    );
    useEffect(() => {
        SetAllOrders(addOrdersData);
    }, [addOrdersData]);
    return [addOrders, isLoading, refetch];
};
export default useAllOrders;
