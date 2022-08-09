import React from 'react';
import '../css/PasswordInput.css'

//Пропсы
//isError - подсвечивать поле как ошибку или нет
//ErrorMessage - cообщение ошибки
//value - значение
//placeholder - полупрозрачная подсказка в текстовом поле
//onPasswordChange - обработчик событий изменения пароля
//containerClasses - классы, добавляемые к контейнеру

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            isValid: true
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
    }

    handleChange(e) {
        this.props.onPasswordChange(e.target.value);
    }

    render() {
        const type = this.state.isVisible ? "text" : "password";
        const visibilityIcon = this.state.isVisible ? "passwordVisible" : "passwordInvisible";
        let classes = '';
        if (this.props.isError) {
            classes = classes.concat('passwordInput__error')
        } 
        return ( 
            <div className={'passwordContainer '.concat(this.props.containerClasses)}>
            <input
                {...this.props.input} 
                type={type} className={'passwordInput '.concat(classes)} 
                placeholder={this.props.placeholder ? this.props.placeholder : "Пароль"}
                value={this.props.value}
                onChange={this.handleChange}
                name={this.props.name}
            />
            <span className={'passwordVisibilityToggle '.concat(visibilityIcon)} onClick={this.handleClick}></span>
            <span className='passwordContainer_errorMessage'>{this.props.isError ? this.props.ErrorMessage : ''}</span>
            </div>
        );
    }
}
 
export default PasswordInput;