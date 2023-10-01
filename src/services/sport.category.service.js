const { Sport_category } = require("../models");
// Get sport category by name
const get_sport_category_by_name = async(sport_category_name) => {
    return Sport_category.findOne({sport_category_name})
}
// Create sport category
const create_sport_category = async(reqbody) => {
    return Sport_category.create(reqbody);
}
// Get sport category list
const get_sport_category_list = async() => {
    return Sport_category.find();
}
// Get sport category by id
const get_sport_category_by_id = async(sport_category_id) => {
    return Sport_category.findById(sport_category_id);
}
// Update sport category
const update_sport_category = async(sport_category_id,reqbody) => {
    return Sport_category.findByIdAndUpdate(sport_category_id,{$set:reqbody});
}
// Delete sport categoory
const delete_sport_category = async(sport_category_id) => {
    return Sport_category.findByIdAndDelete(sport_category_id);
}
// Exporting service object
module.exports = {
    get_sport_category_by_name,
    create_sport_category,
    get_sport_category_list,
    get_sport_category_by_id,
    update_sport_category,
    delete_sport_category
}