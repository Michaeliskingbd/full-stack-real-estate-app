import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Option2 = () => {

  useEffect(()=> {
    AOS.init();
  }, [])

  return (
    <div className='option2' >
    <h1  data-aos="fade-up"   data-aos-duration="2000">See how we can help</h1>
    <h2  data-aos="fade-up"   data-aos-duration="2000">find your next home<br/>in any style you prefer.</h2>
    <h3  data-aos="fade-up"   data-aos-duration="2000" className=' option subheading'>
    Earn big in rental income from the best tenants in Nigeria.
    </h3>

    <div  data-aos="fade-left"   data-aos-duration="2000" className='explore__btn'>Get Started</div>
</div>
  )
}

export default Option2