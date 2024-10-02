import React from "react";

function Button({ text, onClick, type = 'button', className = '' }) {
    return (
    <button type={type} onClick={onClick} className={className}>
        {text}
    </button>
    );
}

export default Button;