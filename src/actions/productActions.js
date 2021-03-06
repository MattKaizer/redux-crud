import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, START_PRODUCTS_DOWNLOADING, PRODUCTS_DOWNLOADING_SUCCESS, PRODUCTS_DOWNLOADING_ERROR, GET_PRODUCT_DELETE, PRODUCT_DELETED_SUCCESS, PRODUCT_DELETED_ERROR, GET_PRODUCT_EDIT, START_PRODUCT_EDIT, PRODUCT_EDIT_SUCCESS, PRODUCT_EDIT_ERROR } from '../types';
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

// DELETES

export function deleteProductAction (id) {
    return async(dispatch) => {
        dispatch(getProductDelete(id));
        // console.log(id)
        try {
            await axiosClient.delete(`/products/${id}`);
            dispatch(deleteProductSuccess());
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        } catch (error) {
            
        }
    }
} 

export const getProductDelete = id => ({
    type: GET_PRODUCT_DELETE,
    payload: id
})
export const deleteProductSuccess = () => ({
    type: PRODUCT_DELETED_SUCCESS
})
export const deleteProductError = () => ({
    type: PRODUCT_DELETED_ERROR,
    payload: true
})

// edit
export const getProductEdit = product => {
    return (dispatch) => {
        dispatch(getProductEditAction(product));
    }
}

const getProductEditAction = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product
})

export function editProductAction(product) {
    return async (dispatch) => {
        dispatch( startProductEdit() );

        try {
            await axiosClient.put(`/products/${product.id}`, product);
            // console.log(res)
            dispatch(editProductSuccess(product));
        } catch (error) {
            // console.log(error);
            dispatch(editProductError())
        }
    }
}

const startProductEdit = () => ({
    type: START_PRODUCT_EDIT,
});
const editProductSuccess = product => ({
    type: PRODUCT_EDIT_SUCCESS,
    payload: product
});
const editProductError = () => ({
    type: PRODUCT_EDIT_ERROR,
    payload: true
});

