const { Sport_team } = require("../models");
// Get sport team by name
const get_sport_team_by_name = async(sport_team_name) => {
    return Sport_team.findOne({sport_team_name})
}
// Create sport team
const create_sport_team = async(reqbody) => {
    return Sport_team.create(reqbody);
}
// Get sport team list
const get_sport_team_list = async() => {
    return Sport_team.find();
}
// Get sport team by id
const get_sport_team_by_id = async(sport_team_id) => {
    return Sport_team.findById(sport_team_id);
}
// Update sport team
const update_sport_team = async(sport_team_id,reqbody) => {
    return Sport_team.findByIdAndUpdate(sport_team_id,{$set:reqbody});
}
// Delete sport team
const delete_sport_team = async(sport_team_id) => {
    return Sport_team.findByIdAndDelete(sport_team_id);
}
// Exporting service object
module.exports = {
    get_sport_team_by_name,
    create_sport_team,
    get_sport_team_list,
    get_sport_team_by_id,
    update_sport_team,
    delete_sport_team
}