const express=require("express")
const { sendOTP, checkOTP, login } = require("../../controller/website/auth/authController")

const userRoute=express.Router()

userRoute.post("/send-otp",sendOTP)

userRoute.post("/check-otp-register",checkOTP)

userRoute.post("/login",login)

module.exports={userRoute}