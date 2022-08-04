import React from 'react';
import '../css/PasswordInput.css'

class PasswordInput extends React.Component {
    state = {  } 
    render() { 
        return ( 
            <input type="password" className='passwordInput' placeholder={this.props.placeholder ? this.props.placeholder : "Пароль"}/>
        );
    }
}
 
export default PasswordInput;