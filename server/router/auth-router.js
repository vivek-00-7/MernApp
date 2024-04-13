const express = require("express")
const router = express.Router();

const authcontrollers = require("../controllers/auth-controller")

router.route("/register").get(authcontrollers.register)
router.route("/login").get(authcontrollers.login)

module.exports = router;