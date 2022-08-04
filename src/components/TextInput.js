import React from 'react';
import '../css/TextInput.css'

function TextInput(props) {
    return ( 
        <input className='textInput' type="text" placeholder={props.placeholder}/>
     );
}

export default TextInput;