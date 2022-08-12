import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Profile from './Profile';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';

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