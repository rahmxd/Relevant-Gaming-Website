import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Navbar.css';

function Navbar() {
    const navOptions = [
        { 
            name: 'Home',
            address: '/',
        },
        {
            name: 'About',
            address: '/about'
        },
        {
            name: 'Teams',
            address: '/teams'
        },
        {
            name: 'Schedule',
            address: '/schedule'
        },
        {
            name: 'Testimonials',
            address: '/testimonials'
        },
        {
            name: 'Partners',
            address: '/partners'
        },
        {
            name: 'Contact',
            address: '/contact'
        }
    ];

        const [click, setClick] = useState(false);
        const [button, setButton] = useState(true);

        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

        const showButton = () => {
            if (window.innerWidth <= 960) {
                setButton(false);
            } else {
                setButton(true);
            }
        };
        useEffect(() => {
            showButton();
        }, []);
        
        window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            {/* LOGO */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <strong>RLVT</strong>
            <i class='fab fa-typo3' />
          </Link>
          {/* MENU ICONS RIGHT */}
          <div className='menu-icon' onClick={handleClick}>
            {click ? <ImCross/> : <GiHamburgerMenu/>}
          </div>
          {/* NAV MENU OPTION */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {
                navOptions.map((option, index) => {
                    return (
                        <li className='nav-item'>
                            <Link to={option.address} className='nav-links' onClick={closeMobileMenu}>
                                {option.name}
                            </Link>
                        </li>
                    )
                })
            }
            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                MEMBERS
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>MEMBERS</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;