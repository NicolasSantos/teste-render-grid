import { combineReducers } from 'redux';
import products from './Products';
import toast from './Toast';

const rootReducer = combineReducers({
    products: products,
    toast: toast
});

export default rootReducer;