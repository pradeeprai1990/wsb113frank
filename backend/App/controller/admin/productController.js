const { categoryModel } = require("../../modal/admin/categoryModal")
const { colorModal } = require("../../modal/admin/colorModal")
const { productModal } = require("../../modal/admin/ProductModel")
const { sizeModal } = require("../../modal/admin/sizeModal")
const { subcategoryModel } = require("../../modal/admin/subCategoryModal")



let productInsert=async (req,res)=>{

    console.log(req.body)

    let insertObject={
        productName:req.body.productName,
        productDes:req.body.productDescription,
        productShortDes:req.body.productShortDescription,
        productParentCat:req.body.productParentCatId,
        productSubParentCat:req.body.subParentCatSelectBox,
        productPrice:req.body.pdPrice,
        productMrp:req.body.pdMRP,
        productSize:req.body.productSizeId,
        productColor:req.body.productColorId,
        productStatus:req.body.status

    }
    console.log(req.files)
    if(req.files){
        if(req.files['pdImg-input']){
            insertObject['productImage']=req.files['pdImg-input'][0]['filename']
        }

        if(req.files['pdGalleryImg-input']){
            insertObject['productGallery'] = req.files['pdGalleryImg-input'].map((items)=>items.filename)

        }
    }
   let productTable=await productModal(insertObject)

   let finalRes=await productTable.save()
   let obj={
    status:1,
    message:"Data",
    finalRes
   }

   res.send(obj)
}

let productView=async (req,res)=>{
    let finalData=await productModal
    .find().
    populate('productParentCat','categoryName').
    populate('productSubParentCat','subCategoryName').
    populate('productSize','sizeName').
    populate('productColor','colorName')
    let obj={
        status:1,
        data:finalData
    }
    res.send(obj)
}


let parentcat=async (req,res)=>{
    let productData=await categoryModel.find({ categoryStatus: 1 });
    res.status(200).json({
        status:1,
        datalist:productData
    })
}

let sizeView=async (req,res)=>{
    let sizeData=await sizeModal.find({sizeStatus:1})
    res.status(200).json({
        status:1,
        datalist:sizeData
    })
}


let subCategoryView=async (req,res)=>{

    let id=req.params.pid
    let subCatData=await subcategoryModel.find({subCategoryStatus:1,parentCategoryId:id})
    res.status(200).json({
        status:1,
        datalist:subCatData
    })    
   
   
}

let colorView=async (req,res)=>{
    let colorData=await colorModal.find({colorStatus:1})
    res.status(200).json({
        status:1,
        datalist:colorData
    })
}
module.exports={sizeView, colorView,subCategoryView,productInsert,parentcat,productView}