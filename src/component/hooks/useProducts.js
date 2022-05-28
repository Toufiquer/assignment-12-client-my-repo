import { useEffect, useState } from "react";
import { useQuery } from "react-query";
const useProducts = () => {
    const [allProducts, SetAllProducts] = useState([]);

    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery("doctorServices", () =>
        fetch(`https://fierce-savannah-66985.herokuapp.com/allProducts`).then(
            res => res.json()
        )
    );
    useEffect(() => {
        SetAllProducts(products);
    }, [products]);
    return [allProducts, isLoading, refetch];
};
export default useProducts;
