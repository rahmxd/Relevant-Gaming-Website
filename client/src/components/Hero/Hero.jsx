import React from 'react';
import Button from '../Button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero-container container'>
        {/* Headers */}
        <div className="hero best">
            <h3>WE ARE</h3>
            <h1>RELEVANT</h1>
            <h2>COMPETITIVE E-SPORTS TEAM</h2>
        </div>
        {/* Buttons */}
        <div className="hero hero-btns">
            <button>
                Get started
            </button>
            <button>
                Learn more
            </button>
        </div>
    </section>
  )
}

export default Hero