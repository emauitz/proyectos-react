import React from 'react';

function FormInput ({placeholder, name, value}) {
    return (
        <input placeholder={placeholder} name={name} value={value} />
    );
}

export default FormInput;
