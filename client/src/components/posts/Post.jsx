import React from 'react'
import image from'../../assets/john-fornander-tVzyDSV84w8-unsplash.jpg';
import "./post.css"
import { Link } from 'react-router-dom';



const Post = ({post}) => {
  const PF = "http://localhost:5000/images/";
  return (
    
    
      <Link className='my__link' to={`/post/${post._id}`}>

       

        
             <div className='house__content' >
          
            
            { post.photo && <img className='house__image' src={PF + post.photo} alt='house'/>}
 
             <div className='house__info'>
             <p className='price'>{post.price}</p>
             <p>{post.bedroom} beds | {post.bathroom} bath | For sale</p>
             <p className='location'>{post.location}</p>
             <p className='name'> {post.name} | {post.createdAt} </p>
            
             </div>
             
         </div>
       
      
       
    </Link>

    
        
  )
}

export default Post