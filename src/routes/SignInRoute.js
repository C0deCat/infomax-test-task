import React, { Component } from 'react';
import Logo from '../components/Logo';
import SignInForm from '../components/SignInForm';
import '../css/signInRoute.css'

class SignInRoute extends Component {
  state = {  } 
  render() { 
    return (
      <div className='formBlock'>
        <Logo />
        <SignInForm />
      </div>
    );
  }
}
 
export default SignInRoute;