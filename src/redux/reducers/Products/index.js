import * as productsType from '../../types/Products';

const initialState = {
    products: [],
    filteredProducts: [],
    loading: false,
    error: null
}

export default function products(state = initialState, action) {
    switch(action.type) {
        case productsType.SET_PRODUCTS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case productsType.SET_PRODUCTS_FILTERED_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case productsType.SET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.products,
                filteredProducts: action.products
            }
        case productsType.SET_PRODUCTS_FILTERED_SUCCESS:
            return {
                ...state,
                loading: false,
                filteredProducts: action.products
            }
        case productsType.SET_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state;
    }
}