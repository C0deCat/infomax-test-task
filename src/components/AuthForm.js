import React, { Component } from 'react';
import Button from './Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import '../css/SignInForm.css'
import TextInput from './TextInput';
import { Link } from 'react-router-dom';

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: {
                value: '',
                isValid: true,
            },
            lastName: {
                value: '',
                isValid: true,
            },
            email: {
                value: '',
                isValid: true,
            },
            password: {
                value: '',
                isValid: true,
            },
            confirmationPassword: {
                value: '',
                isConfirmed: true,
            },
        }

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmationPasswordChange = this.handleConfirmationPasswordChange.bind(this);
    }

    handleFirstNameChange(firstName) {
        this.setState({
            firstName: {
                value: firstName,
                isValid: firstName.trim() !== '',
            },
        });
    }

    handleLastNameChange(lastName) {
        this.setState({
            lastName: {
                value: lastName,
                isValid: lastName.trim() !== '',
            },
        });
    }

    handleEmailChange(email) {
        const isValid = this.validateEmail(email);
        this.setState({
            email: {
                value: email,
                isValid: isValid,
            },
        });
    }
    
    handlePasswordChange(value) {
        const isValid = this.validatePassword(value);

        this.setState({
            password: {
                value: value,
                isValid: isValid
            }
        });
    }

    handleConfirmationPasswordChange(confirmationPassword) {
        this.setState({
            confirmationPassword: {
                value: confirmationPassword,
                isConfirmed: this.state.password.value === confirmationPassword
            },
        });
    }

    validatePassword(password) {
        if (password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z0-9]/g)
        && password.length >= 8) {
          return true;
        }
        else {
          return false;
        }
    }

    validateEmail(email) {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
            return true
        }
        else {
            return false
        }
    }

    render() {
        const nameErrorMessage = "Поле не должно быть пустым!"
        const emailErrorMessage = "Некорректно введен Email!"
        const passwordErrorMessage = "Пароль должен содержать минимум восемь символов, цифры, строчные и заглавные буквы и небуквенные символы (!, @, ? и т.п.)";
        const confirmPasswordErrorMessage = "Пароли не одинаковы!"; 
        return ( 
            <form className='formContainer'>
                <h1 className='formContainer_header'>Регистрация</h1>
                <TextInput placeholder="Имя" value={this.state.firstName.value} 
                onTextChange={this.handleFirstNameChange} 
                ErrorMessage={nameErrorMessage}
                isError={!this.state.firstName.isValid} />

                <TextInput placeholder="Фамилия" value={this.state.lastName.value}
                onTextChange={this.handleLastNameChange}
                ErrorMessage={nameErrorMessage}
                isError={!this.state.lastName.isValid} />

                <EmailInput value={this.state.email.value} 
                onEmailChange={this.handleEmailChange} 
                ErrorMessage={emailErrorMessage}
                isError={!this.state.email.isValid} />

                <PasswordInput placeholder="Введите пароль" value={this.state.password.value}
                onPasswordChange={this.handlePasswordChange} 
                ErrorMessage={passwordErrorMessage}
                isError={!this.state.password.isValid} />

                <PasswordInput placeholder="Повторите пароль" value={this.state.confirmationPassword.value}
                onPasswordChange={this.handleConfirmationPasswordChange}
                ErrorMessage={confirmPasswordErrorMessage}
                isError={!this.state.confirmationPassword.isConfirmed} />

                <Button value="Применить и войти" />
                <div className='formContainer_textCaption'>Уже зарегистрированы? <Link to="/" className='formContainer_link'>Вход</Link></div>
            </form>
         );
    }
}
 
export default AuthForm;