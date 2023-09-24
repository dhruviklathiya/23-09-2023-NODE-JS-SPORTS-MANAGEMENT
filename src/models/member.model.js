const mongoose = require("mongoose");

const member_Schema = new mongoose.Schema(
    {
        member_name:{
            type:String,
            trim:true
        },
        member_email:{
            type:String,
            trim:true
        },
        is_active:{
            type:Boolean,
            default:true
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const member = mongoose.model("Member",member_Schema);

module.exports = member