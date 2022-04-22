const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName:String,
  email: String,
  password: Object,
  dpassword: String,
  tokens:[{
    token:{
       type:String,
    required:true
    }
  }],
  hash:String,
  salt:String,
},{timestamps:true})

// //  we are generating token

userSchema.methods.generateAuthToken = async function (){
  try {
   let token = jwt.sign({_id:this._id},"mynameisjatinanjanefromharda") ;
   
   // We can also insert secret key in .env file to hide tthe secret kry and acceess by the process.env.seckret key
   
   this.tokens = this.tokens.concat({token:token}) 
  await this.save();
   return token;
  console.log(token);
  }catch(err){
    console.log(err);
  }
}

// Collection creation

const User = mongoose.model("User",userSchema)

module.exports = User;