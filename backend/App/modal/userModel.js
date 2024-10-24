let mongoose = require("mongoose");
let userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    userEmail: String,
    userPassword: String,
    gender: {
        type:String,
        enum:[1,2,3]
    },
   
  },
  {
    timestamps: true,
  }
);
let userModal = mongoose.model("users" ,userSchema);
module.exports = {userModal};