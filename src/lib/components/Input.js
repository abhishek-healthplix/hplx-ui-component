import React from 'react';

const Input = (props) => {
    const {
        name,
        label = '',
        onChange,
        value = '',
        onBlur,
        type = 'text',
        disabled = false,
        placeholder = '',
        required = false,
        className = ""
    } = props;

    return (
        <label>
            {label && <span>{label}</span>}
            <input 
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                required={required}
                name={name}
                type={type}
                value={value}
                disabled={disabled} />
        </label>
    )
}

export default Input;