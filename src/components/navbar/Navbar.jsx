import React, { useRef, useState } from 'react'
import './Navbar.css'
import anza_logo from '../../assets/anza_logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
const Navbar = () => {

const [menu,setMenu] = useState("home");
const menuRef = useRef();

const openMenu = () => {
  menuRef.current.style.right = "0";
  document.querySelector(".nav-mob-open").style.display = "none";
};

const closeMenu = () => {
    menuRef.current.style.right = "-100%"; 
    document.querySelector(".nav-mob-open").style.display = "block";
};

const handleMenuClick = (section) => {
        setMenu(section);

        if (window.innerWidth <= 768) {
            closeMenu();
        }
};

  return (
    <div className='navbar'>
      <img src= {anza_logo} alt='' className='logo' />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <a
            className="anchor-link"
            offset={50}
            href="#home"
            onClick={() => handleMenuClick("home")}
          >
            Home
          </a>
          {menu==="home"&&(<img src={underline} alt=''/>)}
        </li>
        <li>
          <a 
            className='anchor-link' 
            offset={50} href='#about'
            onClick={()=> handleMenuClick("about")}
          >
            About Me
          </a>
            {menu==="about" && (<img src={underline} alt=''/>)}
          </li>
        <li>
          <a 
            className='anchor-link' 
            offset={50} 
            href='#services'
            onClick={()=> handleMenuClick("services")}
          > 
            Services
          </a>
          {menu==="services" && (<img src={underline} alt=''/>)}
        </li>
        <li>
          <a 
            className='anchor-link' 
            offset={50} 
            href='#work'
            onClick={()=> handleMenuClick("work")}
          >
            Portfolio
          </a>
          {menu==="work" && (<img src={underline} alt=''/>)}
        </li>
        <li>
          <a 
            className='anchor-link' 
            offset={50} 
            href='#contact'
            onClick={()=> handleMenuClick("contact")}
          >
              Contact
          </a>
            {menu==="contact" && (<img src={underline} alt=''/>)}
        </li>
      </ul>
      <div className="nav-connect"><a className='anchor-link' offset={50} href='#contact'>Connect With Me</a></div>
    </div>
  )
}

export default Navbar