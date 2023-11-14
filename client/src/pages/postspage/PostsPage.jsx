import React, { useEffect, useState } from 'react'
import Post from '../../components/posts/Post'
import "./postpage.css"
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../../components/footer/Footer'
import data from "../../Data"


const PostsPage = () => {

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/post");
      setPosts(res.data.reverse());
    };
    fetchPosts();
  }, []);

  return (
    <>
    <div className='header createpage'>

    <div className='overlay'></div>
    
    <div className='header__content cp'>

    <h1>Find Homes</h1>
    <h2>Explore thousands of houses on citylight.</h2>
    <a  href='#create' className='explore__btn' style={{marginTop: "15px"}}>Get started</a>
      
    
    
    
    
    
    </div>
    </div>

    <div className='postpage__container'>
      

    <div className='filter'>
   
      <select>
        <option>Filter</option>
        <option>Lowest price</option>
        <option>Highest price</option>
        <option>Newly listed</option>
      </select>

      <select>
        <option>City</option>
        <option>Lagos</option>
        <option>Abuja</option>
        <option>PortHarcourt</option>
        <option>Ibadan</option>
      </select>

      <button className='explore__btn' style={{border: "none"}}>Save</button>

      </div>
     

   
    
      
       
      <div className='postpage'>
     {posts.map((p) => (
        <Post post={p} />
      ))}

{data.map(({img, location1, location2, price,createdAt, name, bedroom, bathroom}) => {
          return(
            <Link className='my__link' to="/">
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
      
        
   
     
      </div>
       
    </div>
    <Footer/>
    </>
  
  )
}

export default PostsPage