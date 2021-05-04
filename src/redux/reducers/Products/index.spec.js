import * as productsType from '../../types/Products';
import ProductsReducer from './index';

describe('[REDUX] - Products', () => {
    const initialState = {
        products: [],
        filteredProducts: [],
        loading: false,
        error: null
    };

    it('Should return the initial state', () => {
        expect(ProductsReducer(undefined, {})).toEqual(initialState)
    })

    it('Should update store by ' + productsType.SET_PRODUCTS_REQUESTED, () => {
        expect(
            ProductsReducer(undefined, {
                type: productsType.SET_PRODUCTS_REQUESTED,
            })
        ).toEqual(
            {
                ...initialState,
                loading: true
            }
        )
    })

    it('Should update store by ' + productsType.SET_PRODUCTS_FILTERED_REQUESTED, () => {
        expect(
            ProductsReducer(undefined, {
                type: productsType.SET_PRODUCTS_FILTERED_REQUESTED,
            })
        ).toEqual(
            {
                ...initialState,
                loading: true
            }
        )
    })

    it('Should update store by ' + productsType.SET_PRODUCTS_SUCCESS, () => {
        expect(
            ProductsReducer(undefined, {
                type: productsType.SET_PRODUCTS_SUCCESS,
                products: [{"product": "A"}]
            })
        ).toEqual(
            {
                ...initialState,
                loading: false,
                products: [{"product": "A"}],
                filteredProducts: [{"product": "A"}]
            }
        )
    })

    it('Should update store by ' + productsType.SET_PRODUCTS_FILTERED_SUCCESS, () => {
        expect(
            ProductsReducer(undefined, {
                type: productsType.SET_PRODUCTS_FILTERED_SUCCESS,
                products: [{"product": "A"}]
            })
        ).toEqual(
            {
                ...initialState,
                loading: false,
                filteredProducts: [{"product": "A"}]
            }
        )
    })

    it('Should update store by ' + productsType.SET_PRODUCTS_FAILED, () => {
        expect(
            ProductsReducer(undefined, {
                type: productsType.SET_PRODUCTS_FAILED,
                message: "An unexpected error has occured!"
            })
        ).toEqual(
            {
                ...initialState,
                loading: false,
                error: "An unexpected error has occured!"
            }
        )
    })
})
