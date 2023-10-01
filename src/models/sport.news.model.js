const mongoose = require("mongoose");
// Creating Schema using mongoose
const sport_news_Schema = new mongoose.Schema(
    {
        sport_news_name:{
            type:String,
            trim:true
        },
        sport_news_desc:{
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
const sport_news = mongoose.model("Sports_news",sport_news_Schema);
// Exporting model
module.exports = sport_news