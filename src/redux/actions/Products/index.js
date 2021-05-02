import * as productsType from '../../types/Products';

export function setProducts() {
    return {
        type: productsType.SET_PRODUCTS_REQUESTED
    }
}

export function setProductsFiltered(filteredProducts) {
    return {
        type: productsType.SET_PRODUCTS_FILTERED_REQUESTED,
        products: filteredProducts
    }
}