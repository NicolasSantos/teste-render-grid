import { call, put, takeEvery } from 'redux-saga/effects';
import * as productsType from '../../types/Products';
import * as toastType from '../../types/Toast';
import productsData from '../../../data/data_full.json';


function getJsonProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsData.data);
        }, 2000);
    })
}

function* fetchProducts() {
    try {
        const products = yield call(getJsonProducts);

        yield put({ type: productsType.SET_PRODUCTS_SUCCESS, products: products });
        yield put({ type: toastType.SET_SHOW_TOAST, theme: 'success', message: 'Data loaded successfully!' });
    } catch (e) {
        yield put({ type: productsType.SET_PRODUCTS_FAILED, message: e.message });
    }
}

function* fetchProductsFiltered(action) {
    try {
        yield put({ type: productsType.SET_PRODUCTS_FILTERED_SUCCESS, products: action.products });
    } catch (e) {
        yield put({ type: productsType.SET_PRODUCTS_FAILED, message: e.message });
    }
}

export function* productSaga() {
    yield takeEvery(productsType.SET_PRODUCTS_REQUESTED, fetchProducts);
}

export function* productsFilteredSaga() {
    yield takeEvery(productsType.SET_PRODUCTS_FILTERED_REQUESTED, fetchProductsFiltered);
}