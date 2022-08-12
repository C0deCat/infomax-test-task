import menuIconDark from '../imgs/menuIconDark.svg'
import './NavBar.css'


//props
//onClick[func] - hadler function for onClick event. Used for opening draw menu
function NavBar(props) {
    function handleClick() {
        props.onClick();
    }

    return ( 
        <div className='menuContainer__navigation'>
            <div className='menuContainer__navigationItem' onClick={handleClick}>
                <img src={menuIconDark} alt='' className='menuContainer__navigationIcon'/>
                <span className='menuContainer__navigationItemCaption'>Меню</span>
            </div>
        </div>
     );
}

export default NavBar;