import React, { Component } from 'react';
import Menu from '../components/Menu';
import Profile from '../components/Profile';
import '../css/ProfileRoute.css'

class ProfileRoute extends Component {
    render() { 
        return (
            <div className='siteContainer'>
                <Menu />
                <Profile />
            </div>
        );
    }
}
 
export default ProfileRoute;