import React, { Component } from 'react';
import Button from './Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import '../css/SignInForm.css'
import TextInput from './TextInput';

class AuthForm extends Component {
    state = {  }
    render() { 
        return ( 
            <form className='formContainer'>
                <TextInput placeholder="Имя"/>
                <TextInput placeholder="Фамилия"/>
                <EmailInput />
                <PasswordInput placeholder="Введите пароль"/>
                <PasswordInput placeholder="Повторите пароль"/>
                <Button value="Применить и войти" />
            </form>
         );
    }
}
 
export default AuthForm;