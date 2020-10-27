import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

export const addNewProductAction = (product) => {
    return async (dispatch) => {
        dispatch(addProduct());

        try {
            // insert into API
            await axiosClient.post('/products', product);
            // if its ok
            dispatch(addProductSuccess(product));
            // alert
            Swal.fire(
                'Ok',
                'Product added',
                'success'
            );
        } catch (error) {
            console.log(error);
            // if error
            dispatch(addProductError(true));
            // alert
            Swal.fire({
                icon: 'error',
                title: 'An error happened',
                text: 'An error happened, try again'
            });
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