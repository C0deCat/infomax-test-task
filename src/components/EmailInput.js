import React from 'react';
import '../css/EmailInput.css'

class EmailInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onEmailChange(e.target.value);
    }

    render() { 
        return (
            <input 
                type="email" className='emailInput' 
                placeholder={this.props.placeholder ? this.props.placeholder : "Электронная почта"}
                onChange={this.handleChange}
                value={this.props.value}
            />
        );
    }
}
 
export default EmailInput;