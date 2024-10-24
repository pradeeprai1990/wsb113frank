const { transporter } = require("../../../config/mailConfig");
const bcrypt = require('bcrypt');
const { userModal } = require("../../../modal/userModel");
let myMap=new Map()
const saltRounds = 10;
let sendOTP = async (req, res) => {

  let usertable = await userModal.find({ userEmail: req.body.userEmail });


  if (usertable.length == 0) {
    let mainOTP = (Math.random() * 999999).toString().slice(0, 4)
    myMap.set("OTP",mainOTP)
    const info = await transporter.sendMail({
      from: '"OTP 👻" <pradeep.9997@gmail.com>', // sender address
      to: req.body.userEmail, // list of receivers
      subject: "OTP", // Subject line
      text: "OTP", // plain text body
      html: `OTP ${mainOTP}`, // html body
    });


    res.send({ status: 1, msg: "OTP Send" })
  }
  else {
    res.send({ status: 0, msg: "Email Id already Exist..." })
  }


}


let checkOTP = async (req, res) => {
  let myOTP=myMap.get("OTP")
 if(myOTP==req.body.userOTP){
  const hashPassword = bcrypt.hashSync(req.body.userPassword, saltRounds);
  let {firstName,gender,lastName,userEmail,userPassword}=req.body;

  let obj={
    firstName,
    lastName,
    userEmail,
    userPassword: hashPassword,
    gender
  }

  let userTable= await userModal(obj)
  await userTable.save()
  res.send({ status: 1, msg: "Use Created" })
 }
 else{
  res.send({ status: 0, msg: "Otp Not Valid." })
 }
  
}

let login = async (req, res) => {
     let {userEmail,userPassword}=req.body;

     //Email Check
    let checkUser=await userModal.findOne({userEmail})
    if(checkUser){
        let userDBPassword=checkUser.userPassword;
        let checkPassword=bcrypt.compareSync(userPassword, userDBPassword);
        if(checkPassword){
          res.send({ status: 1, msg: "Login",data:checkUser })
        }
        else{
          res.send({ status: 0, msg: "Password NOt Valid" })
        }

    }
    else{
      res.send({ status: 0, msg: "Email Id NOt Valid" })
    }

}


module.exports = { sendOTP, checkOTP, login }