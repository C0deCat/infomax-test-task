import React, { Component } from 'react';
import Button from './Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import '../css/SignInForm.css'
import TextInput from './TextInput';

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
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
            firstName: firstName,
        });
    }

    handleLastNameChange(lastName) {
        this.setState({
            lastName: lastName,
        });
    }

    handleEmailChange(email) {
        this.setState({
            email: email,
        });
    }
    
    handlePasswordChange(value) {
        let isValid = this.validate(value);

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

    validate(password) {
        if (password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z0-9]/g)
        && password.length >= 8) {
          return true;
        }
        else {
          return false;
        }
    }

    render() { 
        return ( 
            <form className='formContainer'>
                <TextInput placeholder="Имя" value={this.state.firstName} 
                onTextChange={this.handleFirstNameChange} />
                <TextInput placeholder="Фамилия" value={this.state.lastName}
                onTextChange={this.handleLastNameChange} />
                <EmailInput value={this.state.email} 
                onEmailChange={this.handleEmailChange} />
                <PasswordInput placeholder="Введите пароль" value={this.state.password.value}
                onPasswordChange={this.handlePasswordChange} />
                <PasswordInput placeholder="Повторите пароль" value={this.state.confirmationPassword.value}
                onPasswordChange={this.handleConfirmationPasswordChange} />
                <Button value="Применить и войти" />
            </form>
         );
    }
}
 
export default AuthForm;