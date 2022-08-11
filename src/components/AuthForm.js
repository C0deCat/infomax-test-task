import React, { Component } from 'react';
import Button from './Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import '../css/SignInForm.css'
import TextInput from './TextInput';
import { Link } from 'react-router-dom';
import Message from './Message';
import { Form, Field } from 'react-final-form';

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: {
                value: '',
                isError: false,
            }
        }

        this.validateEmail = this.validateEmail.bind(this);
        this.validateTextFields = this.validateTextFields.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
                    signup(firstName: "${values.firstName}", secondName: "${values.lastName}", email: "${values.email}", password: "${values.password}")
                }
                `,
            }),
        })
        .then((res) => res.json())
        .then((result) => {
            if(result.errors) {
                this.setState({
                    message: {
                        value: "Пользователь с такой электронной почтой уже существует!",
                        isError: true,
                    }
                })
            }
            else {
                this.setState({
                    message: {
                        value: "Вы успешно зарегистрированы!",
                        isError: false,
                    },
                });
                form.restart();
            }
        })
        .catch((reason) => {
            this.setState({
                message: {
                    value: "Отсутствует соединение с сервером!",
                    isError: true,
                }
            })
        });
    }

    validateTextFields(value) {
        const text = "".concat(value);
        return text.length > 0 && value !== undefined ? undefined : "Поле не должно быть пустым!"
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

    validatePassword(value) {
        const password = "".concat(value);
        if (password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z0-9]/g)
        && password.length >= 8) {
          return undefined;
        }
        else {
          return "Пароль должен содержать минимум восемь символов, цифры, латинские строчные и заглавные буквы и небуквенные символы (!, @, ? и т.п.)";
        }
    }

    validateForm(values) {
        const errors = {}
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Пароли не одинаковы!";
        }
        return errors
    }

    render() {
        const messageElem = this.state.message.value !== '' ? <Message message={this.state.message.value} isError={this.state.message.isError} /> : '';
        return ( 
            <Form onSubmit={this.onSubmit}
            validate={this.validateForm}
            render={
                ({ handleSubmit, form, submitting, pristine, values, hasValidationErrors }) => (
                    <form className='formContainer' onSubmit={handleSubmit}>
                        <h1 className='formContainer_header'>Регистрация</h1>
                        <Field name='firstName' validate={this.validateTextFields}>
                            {props => (
                                <TextInput 
                                placeholder="Имя" 
                                input={props.input}
                                onTextChange={props.input.onChange} 
                                isError={props.meta.invalid && props.meta.touched}
                                ErrorMessage={props.meta.error}
                                />
                            )}
                        </Field>

                        <Field name='lastName' validate={this.validateTextFields}>
                            {props => (
                                <TextInput 
                                placeholder="Фамилия" 
                                input={props.input}
                                onTextChange={props.input.onChange} 
                                isError={props.meta.invalid && props.meta.touched}
                                ErrorMessage={props.meta.error}
                                />
                            )}
                        </Field>
                        
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

                        <Field name='password' validate={this.validatePassword}>
                            {props => (
                                <PasswordInput 
                                placeholder="Введите пароль"
                                input={props.input}
                                onPasswordChange={props.input.onChange}
                                isError={ props.meta.invalid && props.meta.touched }
                                ErrorMessage={ props.meta.error }
                                />
                            )}
                        </Field>

                        <Field name='confirmPassword'>
                            {props => (
                                <PasswordInput 
                                placeholder="Повторите пароль" 
                                input={props.input}
                                onPasswordChange={props.input.onChange}
                                isError={ props.meta.invalid }
                                ErrorMessage={ props.meta.error }
                                />
                            )}
                        </Field>

                        <Button value="Применить и войти" type="submit"/>
                        <div className='formContainer_textCaption'>Уже зарегистрированы? <Link to="/" className='formContainer_link'>Вход</Link></div>
                        {messageElem}
                    </form>
                )
            } />
         );
    }
}
 
export default AuthForm;