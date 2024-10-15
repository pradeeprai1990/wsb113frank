const mongoose = require("mongoose");

const categorySchema =new mongoose.Schema(
  {
    categoryName: {
      type: String,
      unique: true
    },
    categoryImage: String,
    categoryDescription: String,
    categoryStatus: {
      type: Boolean,
      default: true
    },
  },
  { timestamps: true }
);

const categoryModel=mongoose.model("category",categorySchema)

module.exports={categoryModel}