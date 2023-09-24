const express = require("express");
const sport_nameRouter = require("./sport.name.route")
const sport_founderRouter = require("./sport.founder.route")
const sport_contactRouter = require("./sport.contact.route")
const sport_galleryRouter = require("./sport.gallery.route")
const sport_teamRouter = require("./sport.team.route")
const sport_categoryRouter = require("./sport.category.route")
const sport_playerRouter = require("./sport.player.route")
const sport_coachRouter = require("./sport.coach.route")
const sport_eventRouter = require("./sport.event.route")
const sport_resultRouter = require("./sport.result.route")
const sport_newsRouter = require("./sport.news.route")
const tokenRouter = require("./token.route")
const memberRouter = require("./member.route")

const router = express.Router()

router.use("/sport_name",sport_nameRouter);
router.use("/sport_founder",sport_founderRouter);
router.use("/sport_contact",sport_contactRouter);
router.use("/sport_gallery",sport_galleryRouter);
router.use("/sport_team",sport_teamRouter);
router.use("/sport_category",sport_categoryRouter);
router.use("/sport_player",sport_playerRouter);
router.use("/sport_coach",sport_coachRouter);
router.use("/sport_event",sport_eventRouter);
router.use("/sport_result",sport_resultRouter);
router.use("/sport_news",sport_newsRouter);
router.use("/token",tokenRouter);
router.use("/member",memberRouter);

module.exports = router
