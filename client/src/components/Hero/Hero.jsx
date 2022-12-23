import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import cdl from '../../assets/cdl-logo.png'
import soldier from '../../assets/soldier.png'
import gb from '../../assets/gamebattles-logo.png'
import curve from '../../assets/curved-lines.svg'
import mw2 from '../../assets/mw2-logo.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-column'>
            <Header/>
            <div className='the-best-ad'>
                <div></div>
                <span>The best upcoming cdl team</span>
            </div>
            {/* Hero text */}
            <div className="hero-text">
                <div>
                    <span className='first-text stroke-text'>More</span>
                    <span className='second-text'>competition</span>
                </div>
                <div>
                    <span className='third-text stroke-text'>More</span>
                    <span className='fourth-text'>xp</span>
                </div>
                <div className='small-text'>
                    <p1 className='first-line'>If you can't Identify the target</p1>
                    <br />
                    <strike className='strike'><p1 className='second-line'>You are the target</p1></strike>
                </div>
            </div>

            {/* Stats */}
            <div className="stats">
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

            {/* Hero buttons */}

            <div className="hero-buttons">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className='right-column'>
            <button className='btn'>Join Now</button>

            <div className='cdl'>
                <img src={cdl} className="cdl-logo" alt="cdl logo xp"/>
            </div>

            <div className='gb'>
                <img src={gb} className="gb-logo" alt="gamebattles logo"/>
            </div>

            
            <img src={soldier} alt="solider background" className='soldier-image'/>
            <img src={curve} alt="curved lines behind soldier" className='soldier-image-background' />
            
            <div className='mw2'>
                <img src={mw2} className="mw2-logo" alt="mw2 logo"/>
            </div>

        </div>
    </div>
  )
}
