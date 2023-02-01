const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, uppercase: true, required: true },
    email: String,
    age: Number
})

const User=mongoose.model("user",userSchema)

module.exports=User