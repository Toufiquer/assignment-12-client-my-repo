import { useEffect, useState } from "react";
import { useQuery } from "react-query";
const useProducts = () => {
    const [allProducts, SetAllProducts] = useState([]);

    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery("allProducts", () =>
        fetch(`https://fierce-savannah-66985.herokuapp.com/allProducts`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem(
                    "access-token-12"
                )}`,
            },
        }).then(res => res.json())
    );
    useEffect(() => {
        SetAllProducts(products);
    }, [products]);
    return [allProducts, isLoading, refetch];
};
export default useProducts;
