import { CiMenuFries } from 'react-icons/ci';
import './menu.scss';
import { useState } from 'react';
import { menu } from '../../data';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
    
    return (
        <div className='home-header'>
            <div className='toggle-menu'>
                <CiMenuFries size={26} color='white' onClick={handleShowMenu} />
            </div>

            <div className={`menu-wrapper ${showMenu ? 'menu-active' : ''}`}>
                <ul className='menu'>
                    {menu && menu.map((item) => (
                        <li key={item.id} className='menu-item'>{item.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Menu;