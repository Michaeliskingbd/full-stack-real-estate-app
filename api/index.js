const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authroute = require("./Routes/auth")
const postroute = require("./Routes/post")
const userroute = require("./Routes/user")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const path = require("path");
const multer = require("multer");

app.use(express.json())
app.use(cors({credentials:true, origin:"http://localhost:3000"}));
app.use(cookieParser())

mongoose.connect("mongodb+srv://michaeliskingbd:michaeliskingbd@cluster0.ezdb7br.mongodb.net/?retryWrites=true&w=majority").then(console.log('DataBase connected')) .catch((err) => console.log(err));

app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

  
app.use ("/api/auth", authroute)
app.use ("/api/post", postroute)
app.use ("/api/users", userroute)

app.listen (5000, ()=> {
    console.log("port is listening")
});
