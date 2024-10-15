const { response } = require("express")
const { storyModal } = require("../../modal/admin/storyModal")

let storyInsert=async (req,res)=>{
    // console.log(req.body)
    // console.log(req.files)
    let {storyName,storyDescription,storyStatus}=req.body
    let storyData={
        storyName:storyName,
        storyDescription:storyDescription,
        storyStatus:storyStatus,
        thumbnails:{}
    }
    if(req.files){
        req.files.map((items,index)=>{
            if(items.filename){
                // console.log(items.filename)
                storyData.thumbnails[`image${index+1}`]=items.filename
            }
        })
    }
    const storyCollection=new storyModal(storyData)
    try{
        const storyRes=await storyCollection.save()
        let response={
            status:1,
            message:"Data saved.",
            res:storyRes
        }
        res.send(response)
    }
    catch(error){
        let response={
            status:0,
            message:"Data already exists !",
            error:error
        }
        res.send(response)
    }
}

module.exports={storyInsert}