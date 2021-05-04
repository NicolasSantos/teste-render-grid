import React, { useState } from 'react';
import './index.scss';

const Input = ({name, placeholder, onChange}) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event.target.value);
    };

    return (
        <input value={value} name={name} onChange={handleChange} placeholder={placeholder}/>
    )
}

export default Input;