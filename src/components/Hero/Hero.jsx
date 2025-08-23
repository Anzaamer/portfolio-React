import React from 'react'
import './Hero.css'
import profile_pic from '../../assets/profile_pic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_pic} alt='' />
        <h1><span>I'm Anza Amer,</span> frontend developer</h1>
        <p>Computer Science student skilled in HTML, CSS, JavaScript, and React, with projects including a Netflix clone and portfolio website, and proficient in Git and GitHub.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero