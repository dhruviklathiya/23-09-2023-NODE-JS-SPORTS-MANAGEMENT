const mongoose = require("mongoose");
// Creating Schema using mongoose
const sport_team_Schema = new mongoose.Schema(
    {
        sport_team_name:{
            type:String,
            trim:true
        },
        sport:{
            type: mongoose.Types.ObjectId,
            ref:"Sport_name"
        },
        sport_player_1: {
            type: mongoose.Types.ObjectId,
            ref:"Sport_player"
        },
        sport_player_2: {
            type: mongoose.Types.ObjectId,
            ref:"Sport_player"
        },
        sport_player_3: {
            type: mongoose.Types.ObjectId,
            ref:"Sport_player"
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
const sport_team = mongoose.model("Sports_team",sport_team_Schema);
// Exporting model
module.exports = sport_team