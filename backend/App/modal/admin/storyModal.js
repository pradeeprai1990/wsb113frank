const mongoose = require("mongoose");
const storySchema = mongoose.Schema(
  {
    storyName: {
      type: String,
      unique: true,
    },
    storyDescription: String,
    storyStatus: {
      type: Boolean,
      default: true,
    },
    // ! what will be the schema of Story Images 
    // TODO: Images is not coming in DB
    storyImage: String,
    storyImage: String,
  },
  { timestamps: true }
);

const storyModal=mongoose.model("story",storySchema)

module.exports={storyModal}