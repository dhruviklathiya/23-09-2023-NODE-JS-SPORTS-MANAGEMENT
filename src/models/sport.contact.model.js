const mongoose = require("mongoose");
// Creating Schema using mongoose
const sport_contact_Schema = new mongoose.Schema(
    {
        sport_contact_path:{
            type:String,
            trim:true
        },
        sport_contact_desc:{
            type:String,
            trim:true
        },
        sport:{
            type: mongoose.Types.ObjectId,
            ref:"Sport_name"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)
// Creating model using mongoose
const sport_contact = mongoose.model("Sports_contact",sport_contact_Schema);
// Exporting model
module.exports = sport_contact