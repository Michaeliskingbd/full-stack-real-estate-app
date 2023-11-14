import React, { useState } from 'react'
import "./auth.css"
import { Link, Navigate } from 'react-router-dom';
import axios from "axios" 
import {FcGoogle} from "react-icons/fc"
import {SiFacebook} from "react-icons/si"
import {BsApple} from "react-icons/bs"

 const RegisterPage = () => {
 const [name, setName] = useState("")
 const [username, setUsername] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [error, setError] = useState(false)
 const [direct , setDirect] = useState(false)

 const handleSubmit = async (event) => {
  event.preventDefault();
  try{
    const res = await axios.post("http://localhost:5000/api/auth/register", {
      name,
      username,
      email,
      password,

    });
    if (res.data) {
      setDirect(true)
    }
    //console.log(res.data)
   
   // res.data && window.location.replace("/login")
  } catch(err) {
   setError(true)
  }
  
  
}
if (direct) {
  return <Navigate to="/login"/>
}
  

  return (
    <div className='reg__sec'>
      <h2>REGISTER</h2>
        <form className='register'>

        <label>Full Name</label>
        <input type='text' placeholder='Enter Full Name'
        onChange={(e) => setName(e.target.value)}/>
          
        <label>Email</label>
        <input type='email' placeholder='Enter email'
         onChange={(e) => setEmail(e.target.value)}/>

        <label>Username</label>
        <input type='text' placeholder='Create Username'
         onChange={(e) => setUsername(e.target.value)}/>

      <label>Password:</label>
      <input type="password" placeholder='Create password'
       onChange={(e) => setPassword(e.target.value)}/>
      
      {error && <label className='error'>An error occur, please try again</label> }
      

      <div className='agent__box'>
        
        <input type='checkbox'/>
        <span>I am an agent who is interested in selling</span>   
      </div>

      <div className='btn' onClick={handleSubmit}>Submit</div>
      <span className='ahc'>Already have an account? <Link to='/login'>Sign in</Link> instead</span>

      <div className='other__connect'>
        <Link to="/"><i><BsApple/></i> Continue with Apple</Link>
        <Link to="/"><i><SiFacebook/></i>Continue with Facebook</Link>
        <Link to="/"><i ><FcGoogle/></i> Continue with Google</Link>
      </div>

     

    </form>
    
    </div>
    
    
  );
};


export default RegisterPage