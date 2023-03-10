import Hero from '../../components/Hero/Hero'
import React from 'react'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'
import Partners from '../../components/Partners/Partners'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'


const Home = () => {
  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
  }, [targetId]);

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