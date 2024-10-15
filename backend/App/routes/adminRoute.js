const express=require("express")
const { categoryRoute } = require("./admin/categoryRoutes")
const { sizeRoute } = require("./admin/sizeRoutes")
const { storyRoute } = require("./admin/storyRoutes")
const { sliderRoute } = require("./admin/sliderRoutes")
const { colorRoute } = require("./admin/colorRoutes")
const { subCategoryRoute } = require("./admin/subCategoryRoutes")
const { productRoute } = require("./admin/productRoutes")
const adminRoute=express.Router()

adminRoute.use("/category",categoryRoute)
adminRoute.use("/size",sizeRoute)
adminRoute.use("/story",storyRoute)
adminRoute.use("/slider",sliderRoute)
adminRoute.use("/color",colorRoute)
adminRoute.use("/sub-category",subCategoryRoute)
adminRoute.use("/product",productRoute)

module.exports={adminRoute}