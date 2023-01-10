import Hero from '../../components/Hero/Hero'
import React from 'react'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Partners from '../Partners/Partners'


const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Testimonials/>
      <Partners/>
      <Contact/>
    </>
  )
}

export default Home 