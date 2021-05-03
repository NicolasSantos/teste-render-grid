import React, { useState } from 'react';

const Input = ({name, label, placeholder, onChange}) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event.target.value);
    };

    return (
        <div>
            <label>{label}</label>
            <input value={value} name={name} onChange={handleChange} placeholder={placeholder}/>
        </div>
    )
}

export default Input;