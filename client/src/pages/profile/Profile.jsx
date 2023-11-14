import React, { useContext, useState } from 'react'
import image3 from "../../assets/PngItem_1503945.png"
import "./profile.css"
import { Context} from '../../context/Context'
import axios from 'axios'
import {FcAddImage} from "react-icons/fc"

const Profile = () => {

  const {user, dispatch} = useContext(Context)

  const [file, setFile] = useState(null);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilepicture = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("http://localhost:5000/api/users/" + user._id, updatedUser);
      //console.log(res)
      
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });

    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }

    console.log(user)
  };


  return (
  
    <div className='profile__universal'>
      <div className='profile__container'>
      <div className='profile'>
        <h2>Hello</h2>
        <h3>{user.name}</h3>
        <span>{user.username}</span>
        
        <div className='main__profilepic'>
       
        <img
              src={file ? URL.createObjectURL(file) : PF+user.profilepicture}
              alt=""
            />
          
        </div>
            <label htmlFor='fileInput' style={{ fontSize: "2rem", margin: "0" }} ><i ><FcAddImage/></i></label>
        <div  className='btn' onClick={handleSubmit}>Upload picture  </div>
        <input
         type="file"
         id="fileInput"
         style={{ display: "none" }}
         onChange={(e) => setFile(e.target.files[0])}/>
       
        <div className='upload__details'>Make sure the file you are uoloading is not bigger than 5mb and size not over 1200px by 800px </div>
      </div>



      <div className='dashboard'>
      <h2>Edit Profile</h2>
      <form className='dashboard__content'>

        <div>
          <label>Full name</label>
          <input type='text' placeholder={user.name}/>
        </div>

        <div>
          <label>Username</label>
          <input type='text' placeholder={user.username}/>
        </div>

        <div>
          <label>Email</label>
          <input type='email' placeholder={user.email}/>
        </div>

        <div>
          <label>Password:</label>
          <input type='password'  placeholder='New password'/>
        </div>

        <div> 
          <label>Confirm password:</label>
          <input type='password'  placeholder='Confirm password'/>
        </div>
  
       
      
      </form>
      <div className='btn'>Update info</div>
      </div>
      </div>
     
    </div>

   
   
  )
}

export default Profile