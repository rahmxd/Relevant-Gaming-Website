import React from 'react'
import './About.css'
import soldier from '../../assets/mw2Soldier.png'
import Button from '../Button/Button'

const About = () => {
  return (
    <section className='about'>
      <div className="about__title">
        <h1>RELEVANT</h1>
        <h1>GAMING</h1>
      </div>
      <div className="container about__container">
        <div className="about__left__column">
          <div className="about__content">
            <article className='about__text'>
                <h3>Our Experience</h3>
                <p>
                    Our team was founded in 2013 with the goal of becoming one of the top esports 
                    organizations in the world. Since then, we have built a strong reputation 
                    for our competitive spirit and teamwork, 
                    consistently ranking among the top teams in region.
                </p>
            </article>

            <article className='about__text'>
                <h3>The Team</h3>
                <p>
                    Our organization is made up of several talented and dedicated teams, 
                    each with their own roster of skilled players. Our teams are supported 
                    by a dedicated management team and staff, who work behind the scenes to 
                    ensure that everything runs smoothly.
                </p>
            </article>

            <article className='about__text'>
                <h3>Core Values</h3>
                <p>
                    We are committed to excellence in everything we do, 
                    and we strive to represent the highest levels of 
                    sportsmanship and professionalism in the competitive gaming community.
                </p>
            </article>
          </div>
          <Button
                className='btns about__button'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                Get started
            </Button>
          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
        </div>
        <div className="about__right__column">
          <div className="about__image">
            <img src={soldier} alt="" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default About