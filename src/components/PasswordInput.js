import React from 'react';
import '../css/PasswordInput.css'

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isVisible: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
    }

    render() {
        const type = this.state.isVisible ? "text" : "password";
        const visibilityIcon = this.state.isVisible ? "passwordVisible" : "passwordInvisible";
        return ( 
            <div className='passwordContainer'>
            <input 
                type={type} className='passwordInput' 
                placeholder={this.props.placeholder ? this.props.placeholder : "Пароль"}
            />
            <span className={'passwordVisibilityToggle '.concat(visibilityIcon)} onClick={this.handleClick}></span>
            </div>
        );
    }
}
 
export default PasswordInput;