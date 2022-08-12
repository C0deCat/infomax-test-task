import MenuItem from './MenuItem';
import './Drawer.css';
import menuIconLight from '../imgs/menuIconLight.svg';
import productName from '../imgs/productName.svg';
import userIcon from '../imgs/userIcon.svg';
import chartIcon from '../imgs/chartIcon.svg';
import { useSelector } from 'react-redux';

function Drawer(props) {

    function handleClickOverlay() {
        props.onOverlayClick();
    }


    const overlayVisible = props.isVisible ? "menuContaier__overlay_visible " : "";
    const sidebarSlideIn = props.isVisible ? "menuContainer__sidebar_slideIn " : "";

    const username = useSelector(state => state.currentUser.user.firstName);

    return ( 
        <div className={'menuContaier__overlay '.concat(overlayVisible)} >
            <div className={'menuContainer__sidebar '.concat(sidebarSlideIn)}>
                <div className='menuContainer__sidebarHeader'>
                    <img src={menuIconLight} alt='' className='menuContainer__sidebarIcon' onClick={handleClickOverlay} />
                    <img src={productName} alt=''/>
                </div>
                <MenuItem icon={userIcon} caption={username} linkTo="/profile" />
                <MenuItem icon={chartIcon} caption='Список процессов' linkTo="/processes" />
            </div>
            <div className='menuContainer_overlayFreeSpace' onClick={handleClickOverlay} ></div>
        </div>
     );
}

export default Drawer;