import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from './Context';

const useProductDetails = () => {
    const { product, singleProdDeatils, setsingleProdDeatils } = useContext(productContext);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const selectedProduct = product?.find(prod => prod.id == id);
            if (selectedProduct && selectedProduct !== singleProdDeatils) {
                setsingleProdDeatils(selectedProduct);
            }
        }
    }, [id, product, setsingleProdDeatils]);

    return { singleProdDeatils };
};

export default useProductDetails;
