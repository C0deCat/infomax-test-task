import React, { Component } from 'react';
import Button from './Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';


class SignInForm extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <EmailInput />
                <PasswordInput />
                <Button value="Войти в систему" />
            </form>
         );
    }
}
 
export default SignInForm;