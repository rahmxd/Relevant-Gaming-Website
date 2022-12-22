import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <h1 className='logo'>RLVT</h1>

        <ul className='header-navbar' aria-label='navbar-items'>
            <li>Home</li>
            <li>About</li>
            <li>Teams</li>
            <li>Schedule</li>
            <li>Testimonials</li>
            <li>Partners</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header