const mongoose = require("mongoose");

const sizeSchema =new mongoose.Schema(
  {
    sizeName: {
      type: String,
      unique: true,
    },
    sizeStatus: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const sizeModal=new mongoose.model("size",sizeSchema)

module.exports={sizeModal}