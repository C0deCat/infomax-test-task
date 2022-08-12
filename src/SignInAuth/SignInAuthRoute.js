import React, { Component } from 'react';
import Logo from './Logo';
import './signInAuthRoute.css'
import { Outlet } from "react-router-dom";

class SignInAuthRoute extends Component {
  state = {  } 

  render() { 
    return (
      <div className='formBlock'>
        <Logo />
        <Outlet />
      </div>
    );
  }
}
 
export default SignInAuthRoute;