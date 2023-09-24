const { Member } = require("../models");

// Member by name
const get_member_by_name = async(member_name) => {
    return Member.findOne({member_name})
}
// Create member
const create_member = async(reqbody) => {
    return Member.create(reqbody);
}
// Member list
const get_member_list = async() => {
    return Member.find();
}
// Member by id
const get_member_by_id = async(member_id) => {
    return Member.findById(member_id);
}
// Update member
const update_member = async(member_id,reqbody) => {
    return Member.findByIdAndUpdate(member_id,{$set:reqbody});
}
// Delete member
const delete_member = async(member_id) => {
    return Member.findByIdAndDelete(member_id);
}

module.exports = {
    get_member_by_name,
    create_member,
    get_member_list,
    get_member_by_id,
    update_member,
    delete_member
}