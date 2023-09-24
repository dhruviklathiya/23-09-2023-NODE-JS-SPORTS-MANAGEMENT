const { member_Service } = require("../services");

// Create member
const create_member = async(req,res) => {
    try {
        const reqbody = req.body;
        const member_exist = await member_Service.get_member_by_name(reqbody.member_name);
        if(member_exist){
            throw new Error("Member by this name already exist -!- ");
        }
        const member = await member_Service.create_member(reqbody);
        if(!member){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Member created successfully ^-^ ",
            data:member
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update member
const update_member = async(req,res) => {
    try {
        const member_id = req.params.memberId;
        const reqbody = req.body;
        const member_exist = await member_Service.get_member_by_id(member_id);
        if(!member_exist){
            throw new Error("Member does not exist -!- ");
        }
        const member_update = await member_Service.update_member(member_id,reqbody);
        if(!member_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Member updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete member
const delete_member = async(req,res) => {
    try {
        const member_id = req.params.memberId;
        const member_exist = await member_Service.get_member_by_id(member_id);
        if(!member_exist){
            throw new Error("Member does not exist -!- ");
        }
        const member_delete = await member_Service.delete_member(member_id);
        if(!member_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Member deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Member list
const get_member_list = async(req,res) => {
    try {
        const member_list = await member_Service.get_member_list();
        if(!member_list){
          throw new Error("Member list does not exist -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get member list dispatch successfully ^-^ ",
          data: member_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_member,
    get_member_list,
    update_member,
    delete_member
}