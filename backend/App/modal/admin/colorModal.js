const mongoose = require("mongoose");

const colorSchema = mongoose.Schema(
  {
    colorName: {
      type: String,
      unique: true,
    },
    colorCode: String,
    colorStatus: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const colorModal = mongoose.model("color", colorSchema);

module.exports = { colorModal };
