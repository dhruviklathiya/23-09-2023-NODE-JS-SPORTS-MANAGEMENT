const mongoose = require("mongoose");
// Creating Schema using mongoose
const sport_gallery_Schema = new mongoose.Schema(
    {
        sport_gallery_no:{
            type:String,
            trim:true
        },
        sport_gallery_desc:{
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
const sport_gallery = mongoose.model("Sports_gallery",sport_gallery_Schema);
// Exporting model
module.exports = sport_gallery