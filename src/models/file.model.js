const mongoose = require("mongoose")
const fileSchema = new mongoose.Schema(
    {
      username: { type: String, required: true },
      profilePic: [{ type: String, required: false }],
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("file", fileSchema);