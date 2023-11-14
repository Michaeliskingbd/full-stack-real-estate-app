import React, {  useContext, useRef, useState } from 'react'
import "./auth.css"
import { Link, Navigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';
import {FcGoogle} from "react-icons/fc"
import {SiFacebook} from "react-icons/si"
import {BsApple} from "react-icons/bs"



const LoginPage = () => {


  const [error, setError] = useState(false)
  const [direct , setDirect] = useState(false)

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);




  const [showPassword, setShowPassword] = useState(false);


  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try{
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
  
      }, {  withCredentials: true });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      if (res) {
        setDirect(true)
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      
      setError(true)
    }
    
   

     // res.data && window.location.replace("/")
    }
    
    
  

  if (direct) {
   return <Navigate to="/" />
  
  }


  return (
    <div className='reg__sec'>
      <h2>LOGIN</h2>
        <form className='register'>
          
        <label>Username</label>
        <input type='text' placeholder='Username'
          ref={userRef}/>

      <label>Password:</label>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Password'
        ref={passwordRef}/>

    {error && <label className='error'>Incorrect password or username</label> }

      <div className='btn' onClick={handleSubmit} disabled={isFetching}>Submit</div>
      <span className='ahc'>Don't have an account? <Link to='/register'>Register</Link> here</span>

      <div className='other__connect'>
      <Link to="/"><i><BsApple/></i> Continue with Apple</Link>
        <Link to="/"><i><SiFacebook/></i>Continue with Facebook</Link>
        <Link to="/"><i ><FcGoogle/></i> Continue with Google</Link>

        <div className='eye' onClick={handleTogglePasswordVisibility}>
        <i className="fas fa-eye"  />
       </div>

        
      </div>
    </form>
    </div>
    
  );
};


export default LoginPage