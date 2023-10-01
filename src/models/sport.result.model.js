const mongoose = require("mongoose");
// Creating Schema using mongoose
const sport_result_Schema = new mongoose.Schema(
    {
        sport_result_name:{
            type:String,
            trim:true
        },
        sport_result_desc:{
            type:String,
            trim:true
        },
        event:{
            type: mongoose.Types.ObjectId,
            ref:"Sports_event"
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
const sport_result = mongoose.model("Sports_result",sport_result_Schema);
// Exporting model
module.exports = sport_result