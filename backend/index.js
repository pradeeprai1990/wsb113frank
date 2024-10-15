const express=require("express")
const cors=require("cors")
require("dotenv").config()
const mongoose = require('mongoose');
const { mainRoute } = require("./App/mainRoutes")
const app=express()


app.use(cors())
app.use(express.json())
app.use(mainRoute)
app.use("/uploads/category", express.static("uploads/category"))
app.use("/uploads/slider", express.static("uploads/slider"))
app.use("/uploads/subCategory", express.static("uploads/subCategory"))


mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`)
.then((res)=>{
    app.listen(process.env.SERVER_PORT)
    console.log(process.env.SERVER_PORT)
})