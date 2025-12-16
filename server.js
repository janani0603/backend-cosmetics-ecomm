const mongoose=require('mongoose');
const express=require('express');
const cors=require('cors');
require('dotenv').config();
const app=express();
app.use(express.json()); 
app.use(cors());

//routers
const UserSignupRoutes=require("./Routers/signupRoutes");
app.use("/api/user",UserSignupRoutes)



mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch((err)=>{
    console.log("MongoDB connection failed :",err);
});
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});