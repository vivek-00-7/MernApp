const express = require("express")
const router = express.Router();

router.route("/register").get((req,res)=>{
    res.status(200).send("This is registration page");
 })

router.route("/login").get((req,res)=>{
    res.status(200).send("this is login page");
})

module.exports = router;