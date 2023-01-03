import React from 'react';
import Button from '../Button/Button';
//organise styling sheets later
import '../../App.css'
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
        {/* Headers */}
        <div className="hero header">
            <h1>RELEVANT</h1>
            <h2>If you can't identify the target</h2>
            <h2>You are the target</h2>
        </div>
        {/* Stats */}
        <div className="hero stats">
            <div>
                <span>+1</span>
                <span>owner</span>
            </div>
            <div>
                <span>+2</span>
                <span>coaches</span>
            </div>
            <div>
                <span>+32</span>
                <span>members joined</span>
            </div>
            <div>
                <span>+4</span>
                <span>teams</span>
            </div>
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