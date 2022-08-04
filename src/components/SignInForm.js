import React, { Component } from 'react';
import Button from './Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import '../css/SignInForm.css'
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    state = {  }
    render() { 
        return ( 
            <form className='formContainer'>
                <EmailInput />
                <PasswordInput />
                <Button value="Войти в систему" />
                <Link to="/auth" className='link'>Зарегистрироваться</Link>
            </form>
         );
    }
}
 
export default SignInForm;