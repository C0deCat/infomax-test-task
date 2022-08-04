import React from 'react';
import '../css/Button.css'

function Button(props) {
    return ( 
        <button className='button'>{props.value}</button>
     );
}

export default Button;