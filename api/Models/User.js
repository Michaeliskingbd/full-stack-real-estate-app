const mongoose = require('mongoose');

//CREATING USER DATA IN MONGODB
const UserSchema = new mongoose.Schema({

   name: {
      type: String,
      require: true,
   },

    username: {
        type: String,
        require: true,
        unique: true
     },
     email: {
        type: String,
        require: true,
        unique: true
     },
     password: {
        type: String,
        require: true,
       
     },

      profilepicture: {
      type:String,
      default: "",
      },
      
},
    {timestamps: true}
);
//EXPORTING

module.exports = mongoose.model("User", UserSchema)