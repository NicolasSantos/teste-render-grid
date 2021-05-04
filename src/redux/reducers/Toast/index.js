import * as toastType from '../../types/Toast';

const initialState = {
    show: false,
    theme: '',
    message: ''
}

export default function toast(state = initialState, action) {
    switch(action.type) {
        case toastType.SET_SHOW_TOAST:
            return {
                ...state,
                show: true,
                theme: action.theme,
                message: action.message
            }
        case toastType.SET_HIDE_TOAST:
            return {
                ...state,
                show: false
            }
        default:
            return state;
    }
}