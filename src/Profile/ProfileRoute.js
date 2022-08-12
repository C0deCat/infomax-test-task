import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Profile from './Profile';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';

//props
//token[str] - prop loaded from redux store. Contains current user bearer token
//user[obj] - prop loaded from redux store. Contains current user data  

class ProfileRoute extends Component {
    render() { 
        return (
            <div className='siteContainer'>
                {this.props.token === '' ? <Navigate to="/" replace={true}/> : ''}
                <Menu />
                <Profile />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.currentUser.token,
    user: state.currentUser.user,
});

export default connect(mapStateToProps)(ProfileRoute);