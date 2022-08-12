import React, { Component } from 'react';
import Drawer from './Drawer';
import NavBar from './NavBar';
import './Menu.css';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleOpenMenuClick = this.handleOpenMenuClick.bind(this);
        this.handleOverlayClick = this.handleOverlayClick.bind(this);
        this.state = {
            isDrawerOpened: false,
        }
    }
    
    handleOpenMenuClick() {
        this.setState((prevState) => ({
            isDrawerOpened: !prevState.isDrawerOpened,
        }));
    }

    handleOverlayClick() {
        this.setState((prevState) => ({
            isDrawerOpened: !prevState.isDrawerOpened,
        }));
    }

    render() { 
        return (
            <div className='menuContainer'>
                <NavBar onClick={this.handleOpenMenuClick}/>
                <Drawer onOverlayClick={this.handleOverlayClick} isVisible={this.state.isDrawerOpened} />
            </div>
        );
    }
}

export default Menu;
