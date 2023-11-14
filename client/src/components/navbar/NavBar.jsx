import React, { useContext, useEffect } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import image3 from "../../assets/PngItem_1503945.png"
import image4 from "../../assets/Asset 4citylight.png"
import {AiFillHome} from "react-icons/ai"
import {GiHouseKeys} from "react-icons/gi"
import {VscAccount} from "react-icons/vsc"
import {MdOutlineRealEstateAgent} from "react-icons/md"
import { useState } from 'react';
import { Context } from '../../context/Context';


const NavBar = () => {

 const {user, dispatch} = useContext(Context)
 const PF = "http://localhost:5000/images/"

 const handleLogout = () => {
  dispatch({type : "LOGOUT"})
 }
 

  const [activeNav, setActiveNav] = useState("")

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
   <>
    <nav>
      <h1>
      <Link to="/">
       <img className='logo' src={image4} alt='citylight'/>
      </Link>
      </h1>
      

      <div>
        <ul id="navbar"> 
          <li><Link to={user ? "/posts" : "/login" }>Buy</Link></li>
          <li><Link to= {user ? "/posts" : "/login" }>Rent</Link></li>
          <li><Link to={user ? "/create" : "/login" }>Sell</Link></li>
          <li><Link to={user ? "/profile" : "/login" }>My dashboard</Link></li>
          <div className='signin__box'>
            {user ? <Link to="/"><li onClick={handleLogout}>Log out</li></Link> : <Link to="/login"><li>Log in</li></Link>  }
            
          </div>
         
          
        </ul>
      </div>
     

      <div className='mp'>
        <div className='profile__pic'>
        <Link to={user ? "/profile" : "/login" }> <img
              src={user && PF +user.profilepicture || image3}
              alt=""
            /></Link>
            
          </div>
          
      </div>


    </nav>

    <div className='navbar__mobile'>
    <Link id='link'  to="/"><div> <AiFillHome id='ic' onClick={() => setActiveNav("#home")} className={activeNav ==="#home" ? "active" : ""} />Home</div></Link>
    <Link id='link' to={user ? "/posts" : "/login" }><div> <GiHouseKeys  id='ic'  onClick={() => setActiveNav("#buy")} className={activeNav ==="#buy" ? "active" : ""} />Buy</div></Link> 
    <Link id='link' to={user ? "/create" : "/login" }><div> <MdOutlineRealEstateAgent  id='ic'  onClick={() => setActiveNav("#sell")} className={activeNav ==="#sell" ? "active" : ""}/>Sell</div></Link>
    <Link id='link' ><div className='acc' onClick={toggleDropdown}> <VscAccount  id='ic'  onClick={() => setActiveNav("#account")} className={activeNav ==="#account" ? "active" : ""}/>Account</div></Link>
    {isOpen && (
        <ul className="dropdown-content" onClick={handleItemClick}>
          <Link id='link' to={user ? "/profile" : "/login" } ><li>Dashboard</li></Link>
          {user ? <Link id='link' to="/"><li onClick={handleLogout}>Log out</li></Link> : <Link id='link' to="/login"><li>Log in</li></Link>  }
        </ul>
      )}
      </div>

    </>
   
  )
}


export default NavBar