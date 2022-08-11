import React, { Component } from 'react';
import Button from './Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import '../css/SignInForm.css'
import { Link, Navigate } from 'react-router-dom';
import { connect } from "react-redux";
import { setUser } from "../slices/currentUserSlice";
import Message from './Message';
import { Form, Field } from 'react-final-form';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }


    onSubmit(values, form) {
        fetch(process.env.REACT_APP_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                mutation {
                    login(email: "${values.email}", password: "${values.password}") {
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
                    errorMessage: '',
                });
                form.reset();
            }
        })
        .catch(() => {
            this.setState({
                errorMessage: "Отсутствует соединение с сервером!"
            })
        });
    }

    validateEmail(value) {
        const email = "".concat(value);
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
            return undefined
        }
        else {
            return "Некорректно введен Email!"
        }
    }


    render() { 
        const messageElem = this.state.errorMessage !== '' ? <Message message={this.state.errorMessage} isError={true} /> : '';
        return (
            <Form onSubmit={this.onSubmit}
            render={
                ({ handleSubmit }) => (
                    <form className='formContainer' onSubmit={handleSubmit}>
                        <Field name='email' validate={this.validateEmail}>
                            {props => (
                                <EmailInput 
                                input={props.input} 
                                onEmailChange={props.input.onChange}
                                isError={props.meta.invalid && props.meta.touched}
                                ErrorMessage={props.meta.error}
                                />
                            )}
                        </Field>
                        <Field name='password'>
                            {props => (
                                <PasswordInput 
                                input={props.input}
                                onPasswordChange={props.input.onChange}
                                />
                            )}
                        </Field>
                        <Button value="Войти в систему" type="submit"/>
                        <div className='formContainer_textCaption'><Link to="/auth" className='formContainer_link'>Зарегистрироваться</Link></div>
                        {messageElem}
                        {this.props.token !== '' ? <Navigate to="/profile" replace={true} /> : ''}
                    </form>
                )
            } /> 
         );
    }
}

const mapStateToProps = (state) => ({
    token: state.currentUser.token,
    user: state.currentUser.user,
});

export default connect(mapStateToProps)(SignInForm);