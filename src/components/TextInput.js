import React from 'react';
import '../css/TextInput.css'

function TextInput(props) {
    function handleChange(e) {
        props.onTextChange(e.target.value);
    }
    return ( 
        <input className='textInput' type="text" placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange} />
     );
}

export default TextInput;