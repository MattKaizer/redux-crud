import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, START_PRODUCTS_DOWNLOADING, PRODUCTS_DOWNLOADING_SUCCESS, PRODUCTS_DOWNLOADING_ERROR } from '../types';
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
            // console.log(error);
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
    type: ADD_PRODUCT,
    payload: true
})

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
});

// GET PRODUCTS FROM DB
export function getProductsAction() {
    return async (dispatch) => {
        dispatch( downloadingProducts() );
        
        try {
            const res = await axiosClient.get('/products');
            dispatch(downloadingProductsSuccess(res.data));
            // console.log(res.data)
        } catch (error) {
            dispatch(downloadingProductsError());
        }
    }
}

const downloadingProducts = () => ({
    type: START_PRODUCTS_DOWNLOADING,
    payload: true
})

const downloadingProductsSuccess = products => ({
    type: PRODUCTS_DOWNLOADING_SUCCESS,
    payload: products
})

const downloadingProductsError = () => ({
    type: PRODUCTS_DOWNLOADING_ERROR,
    payload: true
})