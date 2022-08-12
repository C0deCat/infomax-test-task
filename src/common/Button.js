import React from 'react';
import './Button.css'

//props
//isDisabled[bool] - whether button disabled or not
//type[str] - type of button
//value[str] - button caption
function Button(props) {
    return ( 
        <button className='button' disabled={props.isDisabled} type={props.type} >{props.value}</button>
     );
}

export default Button;