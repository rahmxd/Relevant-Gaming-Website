import React from 'react';
import './Hero.css';
import background from '../../assets/4krelevantbg.png'

const Hero = () => {
  return (
    <section id='hero' className='hero'>
        
        <img src={background} alt="" />
        <div className='container hero__container '>
            {/* Headers */}
            <div className="hero__best">
                <h3>WE ARE</h3>
                <h1>RELEVANT</h1>
                <h2>COMPETITIVE E-SPORTS TEAM</h2>
            </div>
            {/* Buttons */}
            <div className="hero__btns">
                <button>
                    Get started
                </button>
                <button>
                    Learn more
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero