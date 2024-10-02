import React from 'react';

function Input({ placeholder, type = 'text', value, onChange, name = '', className = '' }) {
    return (
    <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={className}
    />
    );
}

export default Input;
