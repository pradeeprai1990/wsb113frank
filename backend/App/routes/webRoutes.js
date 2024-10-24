const express=require("express")
const { userRoute } = require("./website/authUserRoutes")

const webRoute=express.Router()

webRoute.use("/user",userRoute)

module.exports={webRoute}