import { combineReducers } from 'redux';
import products from './Products';

const rootReducer = combineReducers({
    products: products
});

export default rootReducer;