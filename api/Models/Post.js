const mongoose = require('mongoose');

//CREATING POST DATA IN MONGODB 

const PostSchema = new mongoose.Schema({

     propertyname: {
      type: String,
      require: true,
      unique: true
    
   },

     desc: {
        type: String,
        require: true,
     
     },
     bedroom: {
        type: String,
        require: true,
      
     },
     bathroom: {
        type: String,
        require: true,
       
     },

     location: {
        type: String,
        require: true,
       
     },

     
     price: {
        type: String,
        require: true,
       
     },

     name: {
      type: String,
      required: true,
    },

        
     photo: {
        type: String,
        require: false,
       
     },
},
    {timestamps: true}
);

//EXPORTING IT SO IT CAN BE USED IN ROUTES OR INDEX FILE

module.exports = mongoose.model("Post", PostSchema)