import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile_pic from '../../assets/about_profile_pic.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about_profile_pic} alt='' />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Computer Science student, specializing in frontend development My work, including a Netflix clone and personal portfolio website, reflects a focus on clean, user-centered design and modern development practices.</p>
                    <p>My goal is to grow into a skilled developer with expertise in AI and cybersecurity, combining these fields to build innovative and secure solutions. I bring strong problem-solving, analytical thinking, and attention to detail to every project I work on.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"65%"}}/></div>
                    <div className="about-skill"><p>Git & GitHub</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>python</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About