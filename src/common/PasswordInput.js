import React from 'react';
import './PasswordInput.css'

//props
//onPasswordChange[func] - event on change password input value
//input[Obj] - pile of props derived from FinalForm Field component. Contains value, name, etc.
//isError[bool] - whether field has error or not
//ErrorMessage[str] - error message. Shows only if isError=true
//placeholder[str] - text hint inside input. Default value: "Пароль"
//containerClasses[str] - contains classes' names for customization purposes

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            isValid: true
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
    }

    handleChange(e) {
        this.props.onPasswordChange(e.target.value);
    }

    render() {
        const type = this.state.isVisible ? "text" : "password";
        const visibilityIcon = this.state.isVisible ? "passwordVisible" : "passwordInvisible";
        let classes = '';
        if (this.props.isError) {
            classes = classes.concat('passwordInput__error')
        } 
        return ( 
            <div className={'passwordContainer '.concat(this.props.containerClasses)}>
            <input
                {...this.props.input} 
                type={type} className={'passwordInput '.concat(classes)} 
                placeholder={this.props.placeholder ? this.props.placeholder : "Пароль"}
                onChange={this.handleChange}
            />
            <span className={'passwordVisibilityToggle '.concat(visibilityIcon)} onClick={this.handleClick}></span>
            <span className='passwordContainer_errorMessage'>{this.props.isError ? this.props.ErrorMessage : ''}</span>
            </div>
        );
    }
}
 
export default PasswordInput;