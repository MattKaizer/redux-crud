import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';

export const addNewProductAction = (product) => {
    return () => {
        console.log(product);
    }
}