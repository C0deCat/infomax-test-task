import menuIconDark from '../imgs/menuIconDark.svg'
import '../css/NavBar.css'

function NavBar(props) {
    function handleClick() {
        props.onClick();
    }

    return ( 
        <div className='menuContainer__navigation' onClick={handleClick}>
            <div className='menuContainer__navigationItem'>
                <img src={menuIconDark} alt='' className='menuContainer__navigationIcon'/>
                <span className='menuContainer__navigationItemCaption'>Меню</span>
            </div>
        </div>
     );
}

export default NavBar;