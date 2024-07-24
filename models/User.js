const mongoose = require("mongoose")
const Schema = mongoose.Schema


const userSchecma = new Schema({


    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
})

const UserModel = mongoose.model('users', userSchecma) 

module.exports = UserModel