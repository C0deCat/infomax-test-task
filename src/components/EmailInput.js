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
        let classes = '';
        if (this.props.isError) {
            classes = classes.concat('emailInput__error')
        } 

        return (
            <div className='emailInputContainer'>
                <input 
                    type="email" className={'emailInput '.concat(classes)} 
                    placeholder={this.props.placeholder ? this.props.placeholder : "Электронная почта"}
                    onChange={this.handleChange}
                    value={this.props.value}
                />
                <span className='emailInputContainer_errorMessage'>{this.props.isError ? this.props.ErrorMessage : ''}</span>
            </div>
        );
    }
}
 
export default EmailInput;