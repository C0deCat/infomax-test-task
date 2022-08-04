import React, { Component } from 'react';
import Logo from '../components/Logo';
import '../css/signInAuthRoute.css'
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