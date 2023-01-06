import React from 'react';
import Button from '../Button/Button';
//organise styling sheets later
import '../../App.css'
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
        {/* Headers */}
        <div className="hero best">
            <h3>WE ARE</h3>
            <h1>RELEVANT</h1>
            <h2>COMPETITIVE E-SPORTS TEAM</h2>
        </div>
        {/* Buttons */}
        <div className="hero hero-btns">
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                Get started
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            >
                Learn more
            </Button>
        </div>
    </div>
  )
}

export default Hero