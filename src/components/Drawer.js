import MenuItem from './MenuItem';
import '../css/Drawer.css';
import menuIconLight from '../imgs/menuIconLight.svg';
import productName from '../imgs/productName.svg';
import userIcon from '../imgs/userIcon.svg';
import chartIcon from '../imgs/chartIcon.svg';  

function Drawer(props) {
    function handleClickOverlay() {
        props.onOverlayClick();
    }

    const classes = props.isVisible ? "menuContaier__overlay_visible" : "";

    return ( 
        <div className={'menuContaier__overlay '.concat(classes)} >
            <div className='menuContainer__sidebar'>
                <div className='menuContainer__sidebarHeader'>
                    <img src={menuIconLight} alt='' className='menuContainer__sidebarIcon'/>
                    <img src={productName} alt=''/>
                </div>
                <MenuItem icon={userIcon} caption={'Username'/*Имя пользователя из стейта*/} />
                <MenuItem icon={chartIcon} caption='Список процессов' />
            </div>
            <div className='menuContainer_overlayFreeSpace' onClick={handleClickOverlay} ></div>
        </div>
     );
}

export default Drawer;