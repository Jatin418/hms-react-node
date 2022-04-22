const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")


const app = express()  
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(cookieParser());

require("./DbConnect/Conn")
app.use(require('./router/auth'));
// import ("./router/auth.js") 

const PORT = 8000;

 app.listen(8000,()=>{
  console.log("My DB is started at port : localhost :8000");
})









// const mongoose = require("mongoose")
// const express = require("express")
// const cors = require("cors")


// const app = express();
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors())

// mongoose.connect('mongodb://localhost:27017/UIdemoproject',{
//   useNewUrlParser:true,
//   useUnifiedTopology: true
// },()=>{
//   console.log("My UIdemoproject DB is Connected");
// })


// const userSchema = new mongoose.Schema({
//   firstName:String,
//     lastName:String,
//     email:String,
//     password:String,
// });

// const User = new mongoose.model("User",userSchema)

// app.post("/register",(req,res)=>{
//   const { firstName,lastName,email,password} = req.body2User.findOne({email:email},(err,user)=>{
//     if(user){
//       res.status(400).json({message:"User Already exist"})
//     }else{
//       const user = new User({
//         firstName,lastName,email,password
//       })
//       user.save(err => {
//         if (err) {
//           res.send(err)
//         }else{
//           res.send({message:"Successfully registered"})
//         }
//       })
//     }
//   })
// })

// app.listen(8000,()=>{
//   console.log("DB is Started At port: localhost:8000");
// })