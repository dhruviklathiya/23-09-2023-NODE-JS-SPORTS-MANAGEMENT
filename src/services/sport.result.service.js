const { Sport_result } = require("../models");
// Get sport result by name
const get_sport_result_by_name = async(sport_result_name) => {
    return Sport_result.findOne({sport_result_name})
}
// Create sport result
const create_sport_result = async(reqbody) => {
    return Sport_result.create(reqbody);
}
// Get sport result list
const get_sport_result_list = async() => {
    return Sport_result.find();
}
// Get sport result by id
const get_sport_result_by_id = async(sport_result_id) => {
    return Sport_result.findById(sport_result_id);
}
// Update sport result
const update_sport_result = async(sport_result_id,reqbody) => {
    return Sport_result.findByIdAndUpdate(sport_result_id,{$set:reqbody});
}
// Delete sport result
const delete_sport_result = async(sport_result_id) => {
    return Sport_result.findByIdAndDelete(sport_result_id);
}
// Exporting service object
module.exports = {
    get_sport_result_by_name,
    create_sport_result,
    get_sport_result_list,
    get_sport_result_by_id,
    update_sport_result,
    delete_sport_result
}