import React from 'react';
import './EmailInput.css'


//props
//onEmailChange[func] - event on change email input value
//input[Obj] - pile of props derived from FinalForm Field component. Contains value, name, etc.
//isError[bool] - whether field has error or not
//ErrorMessage[str] - error message. Shows only if isError=true
//placeholder[str] - text hint inside input. Default value: "Электронная почта"
//containerClasses[str] - contains classes' names for customization purposes



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
            <div className={'emailInputContainer '.concat(this.props.containerClasses)}>
                <input 
                    {...this.props.input}
                    type="email" className={'emailInput '.concat(classes)} 
                    placeholder={this.props.placeholder ? this.props.placeholder : "Электронная почта"}
                    onChange={this.handleChange}
                />
                <span className='emailInputContainer_errorMessage'>{this.props.isError ? this.props.ErrorMessage : ''}</span>
            </div>
        );
    }
}
 
export default EmailInput;