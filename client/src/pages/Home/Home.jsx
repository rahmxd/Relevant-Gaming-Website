import '../../App.css'
import Hero from '../../components/Hero/Hero'
import Cards from '../../components/Cards/Cards'
import React from 'react'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'
const Home = () => {
  return (
    <>
        <Hero/>
        {/* <Cards/> */}
        <About/>
        <Testimonials/>
        <Contact/>
    </>
  )
}

export default Home