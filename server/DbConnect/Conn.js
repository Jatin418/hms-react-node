const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/UIdemoproject',{
  useNewUrlParser:true,
  useUnifiedTopology: true
},()=>{
  console.log("My UIdemoproject DB is Connected");
})