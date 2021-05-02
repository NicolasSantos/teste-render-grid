import { all, fork } from 'redux-saga/effects';
import { productSaga, productsFilteredSaga } from './productSaga';

export default function* rootSaga() {
    yield all([
        fork(productSaga),
        fork(productsFilteredSaga)
    ])
}