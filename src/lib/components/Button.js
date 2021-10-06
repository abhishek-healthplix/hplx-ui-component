import React from 'react';

const Button = (props) => {
    const { 
        label = '',
        className = '',
        type = 'button',
        disabled = false,
        onClick
    } = props;
    return (
        <button 
            className={`btn btn--${className}`}
            type={type}
            disabled={disabled}
            onClick={onClick} > 
                {label}
        </button>
    )
}

export default Button;