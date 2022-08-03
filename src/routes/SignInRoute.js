import React, { Component } from 'react';
import Logo from '../components/Logo';
import SignInForm from '../components/SignInForm';

class SignInRoute extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <Logo />
        <SignInForm />
      </div>
    );
  }
}
 
export default SignInRoute;