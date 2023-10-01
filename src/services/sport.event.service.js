const { Sport_event } = require("../models");
// Get sport event by name
const get_sport_event_by_name = async(sport_event_name) => {
    return Sport_event.findOne({sport_event_name})
}
// Create sport event
const create_sport_event = async(reqbody) => {
    return Sport_event.create(reqbody);
}
// Get sport event list
const get_sport_event_list = async() => {
    return Sport_event.find();
}
// Get sport event by id
const get_sport_event_by_id = async(sport_event_id) => {
    return Sport_event.findById(sport_event_id);
}
// Update sport event
const update_sport_event = async(sport_event_id,reqbody) => {
    return Sport_event.findByIdAndUpdate(sport_event_id,{$set:reqbody});
}
// Delete sport event
const delete_sport_event = async(sport_event_id) => {
    return Sport_event.findByIdAndDelete(sport_event_id);
}
// Exporting service object
module.exports = {
    get_sport_event_by_name,
    create_sport_event,
    get_sport_event_list,
    get_sport_event_by_id,
    update_sport_event,
    delete_sport_event
}