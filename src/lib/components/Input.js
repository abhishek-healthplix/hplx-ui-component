import React from 'react';

const Input = (props) => {
    return (
        <input 
            className={`btn btn--${props.kind} CTA`}
            data-id={props.id}
            type={props.type}
            name={props.name}
            value={props.value}
            disabled={props.disabled}
            onClick={props.handleClick} />
    )
}

export default Input;