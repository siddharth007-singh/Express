const express = require("express");
const router = express.Router();


const authController = require("../controllers/auth_controllers");

// Passing the Controller in router for logic;

router.route("/").get(authController.home);

module.exports = router;