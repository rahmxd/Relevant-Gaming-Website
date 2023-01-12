import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';

function Navbar() {
    const[isNavShowing, setIsNavShowing] = useState(false);
    
    const navOptions = [
        {
            name: 'Home',
            address: '/',
            id: 'hero'
        },
        {
            name: 'About',
            address: '/',
            id: 'about'
        },
        {
            name: 'Teams',
            address: '/teams',
            id: 'teams'
        },
        {
            name: 'Schedule',
            address: '/schedule',
            id: 'schedule'
        },
        {
            name: 'Testimonials',
            address: '/',
            id: 'testimonials'
        },
        {
            name: 'Partners',
            address: '/',
            id: 'partners'
        },
        {
            name: 'Contact',
            address: '/',
            id: 'contact'
        }
    ];

    const scrollToSection = (target) => {
      if (window.location.pathname === '/'){
        const scrolledToElement = document.getElementById(target);
          if (scrolledToElement) {
            scrolledToElement.scrollIntoView();
          }
          //add handling here
      }
    }



  return (
    <>
      <nav className='navbar'>
        <div className='container navbar__container'>
            <Link 
              to='/'
              state={{targetId: 'hero'}}
              className='navbar__logo'
              onClick={()=> {
                setIsNavShowing(false);
                scrollToSection('hero');
                }}>
              <strong>RLVT</strong>
            </Link>
            <ul className={`navbar__links ${isNavShowing ? 'show__navbar' : 'hide__navbar'}`}>
              {
                navOptions.map((link, index) => {
                  return (
                    <li key={index}>
                      <NavLink 
                        to={link.address}
                        state={{targetId: link.id}}
                        className={({isActive}) => isActive ? 'active-nav' : ''} 
                        onClick={()=> {
                          setIsNavShowing(false);
                          scrollToSection(link.id);
                          }}>
                          {link.name}
                      </NavLink>
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