const express=require("express")
const { storyInsert } = require("../../controller/admin/storyController")
const { uploads } = require("../../middleware/fileUploadation")
const storyRoute=express.Router()

storyRoute.post("/insert",uploads("uploads/story").array('storyImage',2), storyInsert)

module.exports={storyRoute}