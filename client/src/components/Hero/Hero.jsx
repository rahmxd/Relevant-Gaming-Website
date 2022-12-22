import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-column'>
            <Header/>
        </div>
        <div className='right-column'>
            right side
        </div>
    </div>
  )
}
