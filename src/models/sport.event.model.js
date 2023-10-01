const mongoose = require("mongoose");
// Creating Schema using mongoose
const sport_event_Schema = new mongoose.Schema(
    {
        sport_event_name:{
            type:String,
            trim:true
        },
        sport_event_desc:{
            type:String,
            trim:true
        },
        sport_event_duration:{
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
const sport_event = mongoose.model("Sports_event",sport_event_Schema);
// Exporting model
module.exports = sport_event