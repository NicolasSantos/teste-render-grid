import React from 'react';
import './index.scss';

const Button = ({icon, onClick}) => {
    return (
        <button onClick={() => onClick()}>
            {icon}
        </button>
    )
}

export default Button;