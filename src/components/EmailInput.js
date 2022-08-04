import React from 'react';
import '../css/EmailInput.css'

class EmailInput extends React.Component {
    state = {  } 
    render() { 
        return (
            <input type="email" className='emailInput' placeholder={this.props.placeholder ? this.props.placeholder : "Электронная почта"}/>
        );
    }
}
 
export default EmailInput;