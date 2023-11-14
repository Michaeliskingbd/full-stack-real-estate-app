import React, { useEffect } from 'react'
import "./header.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

useEffect(()=> {
  AOS.init();
}, [])
  return (
    
    <div className='header'>

      <div className='overlay'></div>

      <div className='header__content' data-aos="fade-in"   data-aos-duration="2000">
        <h1>Discover Your New Home</h1>
        <h2>Helping Nigerians to find their perfect fit.</h2>

        <div className='header__input'>
        <input type='text' placeholder='Enter an address, city or zip code'/>
        <span className='search_icon'><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>
        

      </div>

      
      
    </div>
  )
}

export default Header
