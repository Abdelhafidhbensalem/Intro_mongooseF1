const express = require('express');
const connectDB=require("./config/connectdb")
const User=require("./models/User")

const createUser=async()=>{
    try {
        const user1=new User({age:30,address:"Gafsa",name:"Ali"})
        //console.log(user1) 
        await user1.save()
        console.log("user added success");
    } catch (error) {
        console.log(error)
    }

}
//createUser()

const findAllUsers = async()=>{
    try {
       const users= await User.find({name:"fbdfbd"})
       console.log(users);
    } catch (error) {
        console.log(error);
    }
}
//findAllUsers()
const app = express();
require('dotenv').config()
console.log(process.env.MONGO_URI)

connectDB()
const port = 5000



app.listen(port, (err) => err?console.log(err):console.log(`app listening on port ${port}!`))