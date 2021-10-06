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
    } = props;

    return (
        <label className="frmField">
            {label && <span>{label}</span>}
            <input 
                className={`input-${type}`}
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