import '../css/MenuItem.css'

function MenuItem(props) {
    return (
        <div className="menuContainer__sideBarItem">
            <img src={props.icon} className="menuContainer__sidebarIcon"/>
            <span className="menuContainer__sidebarItemCaption">{props.caption}</span>
        </div>
    );
}

export default MenuItem;