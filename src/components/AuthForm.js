import React, { Component } from 'react';
import Button from './Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import '../css/SignInForm.css'

class AuthForm extends Component {
    state = {  }
    render() { 
        return ( 
            <form className='formContainer'>
                <EmailInput />
                <PasswordInput />
                <Button value="Войти в систему" />
                <Button value="Войти в систему" />
                <Button value="Войти в систему" />
            </form>
         );
    }
}
 
export default AuthForm;