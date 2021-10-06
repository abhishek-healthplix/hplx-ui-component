import React from 'react';

const Button = (props) => {
    return (
        <button 
            className={`btn btn--${props.kind} CTA`}
            data-id={props.id}
            type={props.type}
            name={props.name}
            value={props.value}
            disabled={props.disabled}
            onClick={props.handleClick}> 
                {props.label}
        </button>
    )
}

export default Button;