import * as toastType from '../../types/Toast';

export function setShowToast(theme, message) {
    return {
        type: toastType.SET_SHOW_TOAST,
        theme: theme,
        message: message
    }
}

export function setHideToast() {
    return {
        type: toastType.SET_HIDE_TOAST
    }
}