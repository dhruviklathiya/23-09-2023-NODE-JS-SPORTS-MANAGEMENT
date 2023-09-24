const express = require("express");
const sport_nameRouter = require("./sport.name.route.js")
const sport_founderRouter = require("./sport.founder.route.js")
const sport_contactRouter = require("./sport.contact.route.js")
const sport_galleryRouter = require("./sport.gallery.route.js")
const sport_teamRouter = require("./sport.team.route.js")
const sport_categoryRouter = require("./sport.category.route.js")
const sport_playerRouter = require("./sport.player.route.js")
const sport_coachRouter = require("./sport.coach.route.js")
const sport_eventRouter = require("./sport.event.route.js")
const sport_resultRouter = require("./sport.result.route.js")
const sport_newsRouter = require("./sport.news.route.js")

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

module.exports = router
