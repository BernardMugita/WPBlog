const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    profilePic:{
        type:String,
        default:"",
    },
    fullname:{
        type:String,
        required:true,
        unique:false,
    },
    username:{
        type:String,
        required:true, 
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
        unique:false
    },
    telephone:{
        type:String,
        required:true,
        unique:true
    },
    country:{
        type:String,
        required:true,
        unique:false
    },
    password:{
        type:String,
        required:true,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);