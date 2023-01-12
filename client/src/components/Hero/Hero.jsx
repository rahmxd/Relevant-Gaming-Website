import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Hero.css';
import background from '../../assets/4krelevantbg.png'

const Hero = () => {
    const { ref, inView } = useInView({
        threshold: 1,
        delay: 1000
      })

  return (
    <section id='hero' className='hero'>
        
        <img src={background} alt="" />
        <div className='container hero__container '>
            {/* Headers */}
            <div ref={ref} className="hero__best">
                <h3>WE ARE</h3>
                <h1 id={ inView ? 'abbreviation__effect' : ''}>
                    R
                    <span id='hide1'>E</span>
                    L
                    <span id='hide2'>E</span>
                    V
                    <span id='hide3'>A</span>
                    <span id='hide4'>N</span>
                    T
                </h1>
                <h2>COMPETITIVE E-SPORTS TEAM</h2>
            </div>
            {/* Buttons */}
            <div className="hero__buttons">
                <button className="custom-btn btn-5">
                    <span>Get Started</span>
                </button>
                <button className="custom-btn btn-4">
                    <span>Learn More</span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero