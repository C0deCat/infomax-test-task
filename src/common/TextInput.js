import React from 'react';
import './TextInput.css'


//props
//onTextChange[func] - event on change text input value
//input[Obj] - pile of props derived from FinalForm Field component. Contains value, name, etc.
//isError[bool] - whether field has error or not
//ErrorMessage[str] - error message. Shows only if isError=true
//placeholder[str] - text hint inside input.
//containerClasses[str] - contains classes' names for customization purposes


function TextInput(props) {
    function handleChange(e) {
        props.onTextChange(e.target.value);
    }
    let classes = '';
    if (props.isError) {
        classes = classes.concat('textInput__error')
    }
    return (
        <div className={'inputContainer '.concat(props.containerClasses)}>
            <input className={'textInput '.concat(classes)} type="text" placeholder={props.placeholder}
            {...props.input}
            onChange={handleChange}  />
            <span className='inputContainer_errorMessage'>{props.isError ? props.ErrorMessage : ''}</span>
        </div> 
     );
}

export default TextInput;