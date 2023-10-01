const { Sport_news } = require("../models");
// Get sport news by name
const get_sport_news_by_name = async(sport_news_name) => {
    return Sport_news.findOne({sport_news_name})
}
// Create sport news
const create_sport_news = async(reqbody) => {
    return Sport_news.create(reqbody);
}
// Get sport newslist
const get_sport_news_list = async() => {
    return Sport_news.find();
}
// Get sport news by id
const get_sport_news_by_id = async(sport_news_id) => {
    return Sport_news.findById(sport_news_id);
}
// Update sport news
const update_sport_news = async(sport_news_id,reqbody) => {
    return Sport_news.findByIdAndUpdate(sport_news_id,{$set:reqbody});
}
// Delete sport news
const delete_sport_news = async(sport_news_id) => {
    return Sport_news.findByIdAndDelete(sport_news_id);
}
// Exporting service object
module.exports = {
    get_sport_news_by_name,
    create_sport_news,
    get_sport_news_list,
    get_sport_news_by_id,
    update_sport_news,
    delete_sport_news
}