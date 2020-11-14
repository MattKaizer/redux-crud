import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, START_PRODUCTS_DOWNLOADING, PRODUCTS_DOWNLOADING_SUCCESS, PRODUCTS_DOWNLOADING_ERROR, GET_PRODUCT_DELETE, PRODUCT_DELETED_SUCCESS, PRODUCT_DELETED_ERROR, GET_PRODUCT_EDIT, PRODUCT_EDIT_SUCCESS } from '../types';

// every reducer have his own state
const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteProduct: null,
    productEdit: null
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
        case PRODUCT_DELETED_ERROR:
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
            case GET_PRODUCT_DELETE:
                return {
                    ...state,
                    deleteProduct: action.payload
                }
            case PRODUCT_DELETED_SUCCESS:
                return {
                    ...state,
                    products: state.products.filter(product => product.id !== state.deleteProduct),
                    deleteProduct: null
                }
            case GET_PRODUCT_EDIT:
                return {
                    ...state,
                    productEdit: action.payload
                }
            case PRODUCT_EDIT_SUCCESS:
                return {
                    ...state,
                    productEdit: null,
                    products: state.products.map(product => 
                        product.id === action.payload.id ? product = action.payload : product
                    )
                }
        default:
            return state;
    }
}