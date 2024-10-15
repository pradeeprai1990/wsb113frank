const express=require("express")
const { sizeView, colorView, subCategoryView, productInsert, parentcat, productView } = require("../../controller/admin/productController")

const productRoute=express.Router()
const multer=require("multer")
const { uploads } = require("../../middleware/fileUploadation")



// let storage= multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null,"uploads/product")
//     },
//     filename: function (req,file,cb){
//         cb(null,Date.now()+file.originalname)
//     }
// })

// let uploads=multer({storage: storage})


// uploads("uploads/product").fields(
//     [
//         {
//             name:'pdImg-input',
//             maxCount:1
//         },
//         {
//             name:'pdGalleryImg-input',
//             maxCount:10
//         }
//     ]
// )


productRoute.post("/product-insert",uploads("uploads/product").fields([
    {
        name:'pdImg-input',
        maxCount:1
    },
    {
        name:'pdGalleryImg-input',
        maxCount:10
    }
]),productInsert)


productRoute.get("/product-view",productView)

productRoute.get("/parent-category",parentcat)

productRoute.get("/size-view",sizeView)
productRoute.get("/color-view",colorView)




productRoute.get("/subcategory-view/:pid",subCategoryView)


module.exports={productRoute}