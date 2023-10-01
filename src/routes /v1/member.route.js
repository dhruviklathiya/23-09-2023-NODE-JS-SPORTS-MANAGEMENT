const express = require("express");
const validate = require("../../middlewares/validate");
const { member_Validation } = require("../../validations");
const { member_Controller } = require("../../controllers");
const router = express.Router();
// Defining route
router.post(
    "/create-member",
    validate(member_Validation.create_member),
    member_Controller.create_member
)
router.put(
    "/update-member/:memberId",
    validate(member_Validation.create_member),
    member_Controller.update_member
)
router.delete(
    "/delete-member/:memberId",
    member_Controller.delete_member
)
router.get(
    "/list",
    member_Controller.get_member_list
)
// Exporting router
module.exports = router;