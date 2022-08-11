import React, { Component } from 'react';
import { connect } from "react-redux";
import Button from './Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import TextInput from './TextInput';
import '../css/Profile.css';
import Label from './Label';
import { Form, Field } from 'react-final-form';
import { setUser } from "../slices/currentUserSlice";
import Message from './Message';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validateTextFields = this.validateTextFields.bind(this);
        this.validateForm = this.validateForm.bind(this);

        this.state = {
            buttonCaption: "Сохранить",
            errorMessage: ""
        }
    }
    
    onSubmit(values) {
        fetch(process.env.REACT_APP_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(this.props.token),
            },
            body: JSON.stringify({
                query: `
                mutation {
                    editUser(id: ${this.props.user.id}, email: "${values.email}", firstName: "${values.firstName}", secondName: "${values.lastName}"${values.password ? ', password: "' + values.password + '"' : ""}) {
                        firstName
                        secondName
                        email
                    }
                }
                `,
            }),
        })
        .then((res) => res.json())
        .then((result) => {
            const newUserData = {
                token: this.props.token,

                user: {
                    id: this.props.user.id,
                    firstName: result.data.editUser.firstName,
                    secondName: result.data.editUser.secondName,
                    email: result.data.editUser.email
                }
            }

            this.props.dispatch(setUser(newUserData));
            this.setState({
                buttonCaption: "Сохранено",
                errorMessage: ""
            }, () => setTimeout(() => this.setState({
                buttonCaption: "Сохранить"
            }), 3000));
        })
        .catch(() => {
            this.setState({
                errorMessage: "Сервер недоступен!"
            });
        })
    }

    validatePassword(value) {
        const password = "".concat(value);
        if (value === undefined) {
            return undefined;
        }
        if (password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z0-9]/g)
        && password.length >= 8) {
          return undefined;
        }
        else {
          return "Пароль должен содержать минимум восемь символов, цифры, латинские строчные и заглавные буквы и небуквенные символы (!, @, ? и т.п.)";
        }
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

    validateTextFields(value) {
        const text = "".concat(value);
        return text.length > 0 && value !== undefined ? undefined : "Поле не должно быть пустым!"
    }

    validateForm(values) {
        const errors = {}
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Пароли не одинаковы!";
        }
        return errors
    }

    render() {
        const messageElem = this.state.errorMessage !== '' ? <Message containerClasses="messageContainer_profile" message={this.state.errorMessage} isError={true} /> : '';

        return (
            <Form onSubmit={this.onSubmit}
            validate={this.validateForm}
            initialValues={{
                firstName: this.props.user.firstName,
                lastName: this.props.user.secondName,
                email: this.props.user.email
            }}
            render={
                ({ handleSubmit, form, submitting, pristine, values, hasValidationErrors }) => (
                    <form className='profileForm' onSubmit={handleSubmit}>
                        <div className='profileForm__header'>
                            <h1 className='profileForm__headerCaption'>{this.props.user.firstName + " " + this.props.user.secondName}. Редактирование</h1>
                            <Button value={this.state.buttonCaption} type="submit" isDisabled={pristine || hasValidationErrors} />
                        </div>
                        <div className='profileForm__inputsBox'>
                            <Field name='firstName' validate={this.validateTextFields}>
                                {props => (
                                    <Label value="Имя"><TextInput placeholder="Не задано"
                                    input={props.input}
                                    containerClasses="inputContainer_profile"
                                    onTextChange={props.input.onChange}
                                    isError={props.meta.invalid && props.meta.touched}
                                    ErrorMessage={props.meta.error}
                                    />
                                    </Label>
                                )}
                            </Field>
                            <Field name='lastName' validate={this.validateTextFields}>
                                {props => (
                                    <Label value="Фамилия"><TextInput placeholder="Не задано"
                                    input={props.input}
                                    containerClasses="inputContainer_profile"
                                    onTextChange={props.input.onChange}
                                    isError={props.meta.invalid && props.meta.touched}
                                    ErrorMessage={props.meta.error}
                                    />
                                    </Label>
                                )}
                            </Field>
                            <Field name='email' validate={this.validateEmail}>
                                {props => (
                                    <Label value="Электронная почта">
                                        <EmailInput placeholder="Не задано"
                                        input={props.input} 
                                        containerClasses="inputContainer_profile"
                                        onEmailChange={props.input.onChange} 
                                        isError={props.meta.invalid && props.meta.touched}
                                        ErrorMessage={props.meta.error}
                                        />
                                    </Label>
                                )}
                            </Field>
                            <Field name='password' validate={this.validatePassword}>
                                {props => (
                                    <Label value="Новый пароль">
                                        <PasswordInput placeholder="Не задано"
                                        input={props.input}
                                        containerClasses="inputContainer_profile"
                                        onPasswordChange={props.input.onChange}
                                        isError={ props.meta.invalid && props.meta.touched }
                                        ErrorMessage={ props.meta.error }
                                        />
                                    </Label>
                                )}
                            </Field>
                            <Field name='confirmPassword'>
                                {props => (
                                    <Label value="Повторить пароль">
                                        <PasswordInput placeholder="Не задано" 
                                        input={props.input}
                                        containerClasses="inputContainer_profile"
                                        onPasswordChange={props.input.onChange}
                                        isError={ props.meta.invalid }
                                        ErrorMessage={ props.meta.error }
                                        />
                                    </Label>
                                )}
                            </Field>
                            { messageElem }
                        </div>
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

export default connect(mapStateToProps)(Profile);