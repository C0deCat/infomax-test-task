import React, { Component } from 'react';
import Menu from '../components/Menu';
import '../css/ProfileRoute.css'
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';
import Processes from '../components/Processes';

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