const router = require("express").Router()
const User = require("../Models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const secret = "hereisthesecret"

//REGISTER

router.post("/register" , async (req, res) => {
    //BCRYPT SALT
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.password, salt)

    try{
        const newUser = new User({
            name:req.body.name,
            email:req.body.email,
            username: req.body.username,
            password: hashpassword,
        })
        const user = await newUser.save();
        res.status(200).json(user);
    }catch (err) {
        res.status(500).json(err);
    }
    

})

//LOOGIN

router.post("/login",async (req, res) => {
 try{
    const user = await User.findOne({username: req.body.username})
    !user && res.status(400).json("wrong username or password")

    const validate =  bcrypt.compare(req.body.password, user.password)
    !validate && res.status(400).json("wrong username or password")

    //res.status(200).json(user)
    if (validate) {
        const { password, ...others } = user._doc;
         res.status(200).json(others);
 }
    
  } catch (err) {
    res.status(500).json(err);
  }
        
       
       
       

})


module.exports = router

