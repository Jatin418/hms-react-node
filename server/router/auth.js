const jwt = require("jsonwebtoken");
const express = require("express");
const Authenticate = require("../middleware/authenticate")
// const globalService = require("../core/globalService");
const globalService = require("../core/service");

const router = express.Router();

require("../DbConnect/Conn")
const User = require("../model/userSchema")

// For Login

router.post("/signin", async (req, res)=> {
  let token;
  // console.log("req", req);
 
  // return res.json({data:req.body, param: req.params});
  try{

    const { email, password} = req.body
    console.log("REQ.BODY",req.body);
   
    if (!email || !password) {
     return res.status(400).json({error:"Please fill all the fields"})
   }
    const CheckLogin = await User.findOne({email:email})
    console.log("CHECKLOGIN",CheckLogin);
    // Check the email first later the password with ismatch, if not this 
    // then the email error won't display
  
    if (CheckLogin) {

      token = await CheckLogin.generateAuthToken()
      console.log(token); 

      // Stores in cookies
       
      res.cookie('jwtoken',token,{
        expire:new Date(Date.now + 5000),
        httpOnly:true,
      }); 
 

      console.log("Register Password",CheckLogin.password);
      const enPwd = globalService.decryptData(CheckLogin.password);
      // console.log("Password",password); 
      console.log("encydata login",enPwd); 

      if(password === enPwd){
        res.json({message: "User Login Successful",data:CheckLogin})
        console.log("match")
      }else{
        res.status(400).json({error: "Invalid password"})
        console.log("not match")
      }

    }else{
      res.status(400).json({error: "Invalid email"})
      console.log("Invalid Email");
    } 
  }
  catch(err){
    console.log(err);
  }
});




// For register 

router.post("/signup", async (req,res)=>{
  const {firstName,lastName,email,password,cfpassword}=req.body
  console.log("Body data",req.body);
    if (!firstName || !lastName || !email || !password || password !== cfpassword) {
      return res.status(400).json({error:"Plz Fill All the details"})
    }
   try{
    const UserExist = await User.findOne({email:email}) 
   
   if (UserExist) {
     res.status(404).json({error:"user already exist"})
   }else {

    // This is from globalServices
    // const encyPwd = globalService.encryptString(password);
    

    // This is from Services 
    const encyPwd = globalService.encryptData(password);
    console.log("encrypt register password",encyPwd);
    const decyPwd = globalService.decryptData(encyPwd)
    console.log("decrypt register password",decyPwd);
    const user = new User ({
      firstName,lastName,email,
      password:encyPwd,     
      dpassword:decyPwd,
      cfpassword,
     })
  
     // Checck the data into db but first checks decrypt in userSchema.
      user.save()
     return res.status(200).json({message: 'User Registered Successfully'})
    //  res.send("User Registered Succesfully")
    
   }
   
  }catch(err){
    console.log(err);
  }
  
})

// for the homepage access

router.post("/",Authenticate, async (req,res) =>{
  try {
    const {firstName,lastName,email,password,dpassword} = req.body

    if (!firstName || !lastName || !email || !password) {
      console.log("Error in Home Page");
      res.json({message:"Fill All the Filed to Visit Home Page"})
    }
      const Usercontact = await User.findOne({_id: req.userID})     
     if (Usercontact) {
       const Usermessage = await Usercontact.addMessage( firstName,lastName,email,password)
       await Usercontact.save()
       res.status(200).json({
         message:"Your Homepage Reaches Us"
       })
     }

  } catch (error) {
    console.log(error);
  }
}) 


// ABOUT Us Page For backend

router.get('/about', Authenticate, (req,res)=>{
  console.log('Welcome to About page of server');
  res.send(req.rootUser);
});


// Forr the Contact Pages

router.get('/getdata',Authenticate, (req,res) =>{
  console.log("Welcome My Contact Page");
  res.send(req.rootUser)
})


module.exports = router;