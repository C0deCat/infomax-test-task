import '../css/MenuItem.css'
import { Link } from 'react-router-dom';

function MenuItem(props) {
    return (
        <Link to={props.linkTo} className="menuContainer__sideBarItem">
            <img src={props.icon} className="menuContainer__sidebarIcon"/>
            <span className="menuContainer__sidebarItemCaption">{props.caption}</span>
        </Link>
    );
}

export default MenuItem;