const express=require("express")
const { adminRoute } = require("./routes/adminRoute")
const { webRoute } = require("./routes/webRoutes")
const mainRoute=express.Router()

mainRoute.use("/admin",adminRoute)

mainRoute.use("/web",webRoute)
module.exports={mainRoute}