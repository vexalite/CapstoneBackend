const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
     
    },
    project_name: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    timeframe: {
        type: String,
        required: true,
      },
    technology: {
        type: String,
        required: true,
      },
    team: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("projects", projectSchema);