import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, START_PRODUCTS_DOWNLOADING, PRODUCTS_DOWNLOADING_SUCCESS, PRODUCTS_DOWNLOADING_ERROR } from '../types';

// every reducer have his own state
const initialState = {
    products: [],
    error: null,
    loading: false
}
// eslint-disable-next-line
export default (state = initialState, action) => {
    switch(action.type) {
        case START_PRODUCTS_DOWNLOADING:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case PRODUCTS_DOWNLOADING_ERROR:
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PRODUCTS_DOWNLOADING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        default:
            return state;
    }
}