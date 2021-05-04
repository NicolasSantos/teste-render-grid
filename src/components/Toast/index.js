import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({show, theme, message, onHide}) => {
    useEffect(() => {
        if(show) {
            toast[theme](message, {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                closeOnClick: false,
                pauseOnHover: false
            });

            setTimeout(() => {
                hideToast();
            }, 3000);
        }
    }, [show])

    const hideToast = () => {
        onHide && onHide();
    }

    return (
        <ToastContainer />
    )
}

export default Toast;