const mongoose = require("mongoose");


const businessSchema = new mongoose.Schema(
  {
    uid: {
      type: String
     
    },
    company_name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    industry: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true
      },
  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model("business", businessSchema);