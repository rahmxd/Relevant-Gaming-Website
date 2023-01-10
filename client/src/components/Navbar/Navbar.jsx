import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { Link, NavLink } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
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

    const[isNavShowing, setIsNavShowing] = useState(false);


  return (
    <>
      <nav className='navbar'>
        <div className='container navbar__container'>
            <Link to='/' className='navbar__logo'>
              <strong>RLVT</strong>
            </Link>
            <ul className={`navbar__links ${isNavShowing ? 'show__navbar' : 'hide__navbar'}`}>
              {
                navOptions.map((link, index) => {
                  return (
                    <li key={index}>
                      <NavLink to={link.address} className={({isActive}) => isActive ? 'active-nav' : ''}>{link.name}</NavLink>
                    </li>
                  )
                })
              }
              <li>
                <NavLink to='/members' className='navbar__links__members'>MEMBERS</NavLink>
              </li>
            </ul>
            <button className="navbar__toggle-btn" onClick={()=> setIsNavShowing(!isNavShowing)}>
              {
                isNavShowing ? <ImCross/> : <GiHamburgerMenu/>
              }
            </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;