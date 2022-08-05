import React from 'react';
import '../css/TextInput.css'

function TextInput(props) {
    function handleChange(e) {
        props.onTextChange(e.target.value);
    }
    let classes = '';
    if (props.isError) {
        classes = classes.concat('textInput__error')
    }
    return (
        <div className='inputContainer'>
            <input className={'textInput '.concat(classes)} type="text" placeholder={props.placeholder}
            value={props.value}
            onChange={handleChange} />
            <span className='inputContainer_errorMessage'>{props.isError ? props.ErrorMessage : ''}</span>
        </div> 
     );
}

export default TextInput;