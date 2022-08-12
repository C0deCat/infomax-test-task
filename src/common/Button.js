import React from 'react';
import './Button.css'

function Button(props) {
    return ( 
        <button className='button' disabled={props.isDisabled}>{props.value}</button>
     );
}

export default Button;