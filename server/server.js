const express = require("express");
const app = express();
const router = require("./router/auth-router");
app.use("/api/auth",router);
app.get("/",(req,res)=>{
    res.status(200).send("hello welcome to this mern app");
 })

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})