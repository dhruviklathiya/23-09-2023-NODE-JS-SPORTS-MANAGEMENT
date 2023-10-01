const { Sport_player } = require("../models");
// Get sport player by name
const get_sport_player_by_name = async(sport_player_name) => {
    return Sport_player.findOne({sport_player_name})
}
// Create sport player
const create_sport_player = async(reqbody) => {
    return Sport_player.create(reqbody);
}
// Get sport player list
const get_sport_player_list = async() => {
    return Sport_player.find();
}
// Get sport player by id
const get_sport_player_by_id = async(sport_player_id) => {
    return Sport_player.findById(sport_player_id);
}
// Update sport player
const update_sport_player = async(sport_player_id,reqbody) => {
    return Sport_player.findByIdAndUpdate(sport_player_id,{$set:reqbody});
}
// Delete sport player
const delete_sport_player = async(sport_player_id) => {
    return Sport_player.findByIdAndDelete(sport_player_id);
}
// Exporting service object
module.exports = {
    get_sport_player_by_name,
    create_sport_player,
    get_sport_player_list,
    get_sport_player_by_id,
    update_sport_player,
    delete_sport_player
}