import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer__section'>
        <div className='footer'>
          
            <div className='footer__content'>
            <div className='flinks'>
            <Link id='link' to="/">Agents</Link>
                <Link id='link' to="/">Maps</Link>
                <Link id='link' to="/">Terms & Conditions</Link>
                <Link id='link' to="/">FAQ</Link>
            </div>

            <div className='fsocials'>
            <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
             
            </div>
            </div>
         
        </div>
        <hr/>
        <p>C 2021 all right reserved</p>
    </div>
   
  )
}

export default Footer