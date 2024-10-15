const express=require("express")
const { subCategoryInsert, parentCategoryView, subCategoryView } = require("../../controller/admin/subCategoryController")
const { uploads } = require("../../middleware/fileUploadation")

const subCategoryRoute=express.Router()

subCategoryRoute.get("/parent-category",parentCategoryView)
subCategoryRoute.post("/insert",uploads("uploads/subCategory").single("subCategoryImage"),subCategoryInsert)
subCategoryRoute.get("/view",subCategoryView)
module.exports={subCategoryRoute}