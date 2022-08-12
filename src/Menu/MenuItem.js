import './MenuItem.css'
import { Link } from 'react-router-dom';

//props
//linkTo[str] - link to application page
//icon[str] - link to icon file (svg recomended)
function MenuItem(props) {
    return (
        <Link to={props.linkTo} className="menuContainer__sideBarItem">
            <img src={props.icon} className="menuContainer__sidebarIcon" alt=''/>
            <span className="menuContainer__sidebarItemCaption">{props.caption}</span>
        </Link>
    );
}

export default MenuItem;