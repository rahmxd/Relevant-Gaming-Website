import React from 'react'
import './random.css'
import soldier from '../../assets/mw2Soldier.png'

const About = () => {
  return (
    <section id='about'>
      <div className="about__title">
        <h1>RELEVANT</h1>
        <h1>GAMING</h1>
      </div>
      <div className="container about__container">
        <div className="about__left__column">
          <div className="about__content">
            <article className='about__text'>
                <h3>Experience</h3>
                <p>
                    Our team was founded in 2013 with the goal of becoming one of the top esports 
                    organizations in the world. Since then, we have built a strong reputation for our competitive spirit and teamwork, 
                    consistently ranking among the top teams in region.
                </p>
            </article>

            <article className='about__text'>
                <h3>Experience</h3>
                <p>
                    Our team was founded in 2013 with the goal of becoming one of the top esports 
                    organizations in the world. Since then, we have built a strong reputation for our competitive spirit and teamwork, 
                    consistently ranking among the top teams in region.
                </p>
            </article>

            <article className='about__text'>
                <h3>Experience</h3>
                <p>
                    Our team was founded in 2013 with the goal of becoming one of the top esports 
                    organizations in the world. Since then, we have built a strong reputation for our competitive spirit and teamwork, 
                    consistently ranking among the top teams in region.
                </p>
            </article>
          </div>

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