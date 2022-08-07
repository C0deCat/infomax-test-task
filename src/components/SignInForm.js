import React, { Component } from 'react';
import Button from './Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import '../css/SignInForm.css'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { setUser } from "../slices/currentUserSlice";
import Message from './Message';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(email) {
        this.setState({email: email});
    }

    handlePasswordChange(password) {
        this.setState({password: password});
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch(process.env.REACT_APP_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                mutation {
                    login(email: "${this.state.email}", password: "${this.state.password}") {
                        token
                        user {
                            id
                            firstName
                            secondName
                            email
                        }
                    }
                }
                `,
            }),
        })
        .then((res) => res.json())
        .then((result) => {
            if (result.errors) {
                switch (result.errors[0].message) {
                    case 'No user with that email':
                        this.setState({
                            errorMessage: "Пользователя с таким E-Mail не существует!"
                        })
                        break;
                    case 'Incorrect password':
                        this.setState({
                            errorMessage: "Неправильный пароль!"
                        })
                        break;
                    default:
                        this.setState({
                            errorMessage: "Ошибка клиента!"
                        })
                        break;
                }
            }
            else {
                this.props.dispatch(setUser(result.data.login));
                this.setState({
                    email: '',
                    password: '',
                    errorMessage: '',
                });
            }
        })
        .catch(() => {
            this.setState({
                errorMessage: "Отсутствует соединение с сервером!"
            })
        });
    }

    render() { 
        const messageElem = this.state.errorMessage !== '' ? <Message message={this.state.errorMessage} isError={true} /> : '';
        return ( 
            <form className='formContainer' onSubmit={this.handleSubmit}>
                <EmailInput value={this.state.email} onEmailChange={this.handleEmailChange} />
                <PasswordInput value={this.state.password} onPasswordChange={this.handlePasswordChange} />
                <Button value="Войти в систему" />
                <div className='formContainer_textCaption'><Link to="/auth" className='formContainer_link'>Зарегистрироваться</Link></div>
                {messageElem}
            </form>
         );
    }
}

const mapStateToProps = (state) => ({
    token: state.currentUser.token,
    user: state.currentUser.user,
});

export default connect(mapStateToProps)(SignInForm);