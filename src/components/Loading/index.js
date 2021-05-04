import React from 'react';
import './index.scss';

const Loading = () => {
    return (
        <div className="loading">
            <div className="loading__spinner"></div>
            <span className="loading__text"> Simulando carregamento...</span>
        </div>
    )
}

export default Loading;