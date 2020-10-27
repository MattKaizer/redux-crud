import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';
import axiosClient from '../config/axios';

export const addNewProductAction = (product) => {
    return async (dispatch) => {
        dispatch(addProduct());

        try {
            // insert into API
            await axiosClient.post('/products', product);
            // if its ok
            dispatch(addProductSuccess(product));
        } catch (error) {
            console.log(error);
            // if error
            dispatch(addProductError(true));
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT
})

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})