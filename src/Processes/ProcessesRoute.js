import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';
import Processes from './Processes';

//props
//token[str] - prop loaded from redux store. Contains current user bearer token
//user[obj] - prop loaded from redux store. Contains current user data  

class ProcessesRoute extends Component {
    render() { 
        return (
            <div className='siteContainer'>
                {this.props.token === '' ? <Navigate to="/" replace={true}/> : ''}
                <Menu />
                <Processes />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.currentUser.token,
    user: state.currentUser.user,
});

export default connect(mapStateToProps)(ProcessesRoute);