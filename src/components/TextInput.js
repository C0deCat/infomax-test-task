import React from 'react';
import '../css/TextInput.css'


//Пропсы
//isError - подсвечивать поле как ошибку или нет
//ErrorMessage - cообщение ошибки
//value - значение
//placeholder - полупрозрачная подсказка в текстовом поле
//onTextChange - обработчик событий изменения текстового поля
//containerClasses - классы, добавляемые к контейнеру
//name - имя


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