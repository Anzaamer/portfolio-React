import React from 'react'
import './Footer.css'
import anza_logo from '../../assets/anza_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={anza_logo} alt="" className='footer-logo'/>
                <p>I am a Computer Science student, specializing in frontend development. I've a strong grasp of JavaScript, React JS and Python</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">All rights are reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer