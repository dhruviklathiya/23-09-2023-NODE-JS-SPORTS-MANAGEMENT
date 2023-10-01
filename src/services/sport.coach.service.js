const { Sport_coach } = require("../models");
// Get sport coach by name
const get_sport_coach_by_name = async(sport_coach_name) => {
    return Sport_coach.findOne({sport_coach_name})
}
// Create sport coach
const create_sport_coach = async(reqbody) => {
    return Sport_coach.create(reqbody);
}
// Get sport coach list
const get_sport_coach_list = async() => {
    return Sport_coach.find();
}
// Get sport coach by id
const get_sport_coach_by_id = async(sport_coach_id) => {
    return Sport_coach.findById(sport_coach_id);
}
// Update sport coach
const update_sport_coach = async(sport_coach_id,reqbody) => {
    return Sport_coach.findByIdAndUpdate(sport_coach_id,{$set:reqbody});
}
// Delete sport coach
const delete_sport_coach = async(sport_coach_id) => {
    return Sport_coach.findByIdAndDelete(sport_coach_id);
}
// Exporting service object
module.exports = {
    get_sport_coach_by_name,
    create_sport_coach,
    get_sport_coach_list,
    get_sport_coach_by_id,
    update_sport_coach,
    delete_sport_coach
}