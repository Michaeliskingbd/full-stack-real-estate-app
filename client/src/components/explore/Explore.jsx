import React, { useEffect } from 'react'
import "./explore.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from'../../assets/john-fornander-tVzyDSV84w8-unsplash.jpg';
import { Link } from 'react-router-dom';
import data from "../../Data"
import "../posts/post.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Explore = ({posts}) => {

  useEffect(()=> {
    AOS.init();
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    infinite: true,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplaySpeed: 6000, // Autoplay speed in milliseconds
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },

      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

  

  return (
    <section  data-aos="fade-up"   data-aos-duration="2000" data-aos-once="false">
      

      <div className='section__title'>
        <h1>Explore Houses on Citylights</h1>
        <h3 className='subheading'>Take a deep dive and browse homes for sale
        </h3>
        </div>
        
        <Slider {...settings}>
        {data.map(({img, location1, location2, price,createdAt, name, bedroom, bathroom}) => {
          return(
            <Link className='my__link' to="/posts">
            <div className='house__content' >
            <img className='house__image' src={img} alt='house'/>
      
            <div className='house__info'>
            <p className='price'>{price}</p>
            <p>{bedroom} bed | {bathroom} bath | For sale</p>
            <p className='location'>{location1}</p>
            <p className='name'>{name} | {createdAt} </p>
          
            </div>
      
            </div>
      
            </Link>
          )
           
        })}

        

      

      </Slider>
     

  
        
      
        
        
       
       
    </section>
    
    
  )
}

export default Explore