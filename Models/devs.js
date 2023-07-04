const mongoose = require("mongoose");


const devsSchema = new mongoose.Schema(
  {
    uid: {
      type: String
     
    },
    dev_name: {
      type: String,
      required: true
    },
    skills: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    },
    background: {
        type: String,
        required: true
      },
    completed_projects: {
        type: String,
        required: true
      },
    portfolio_link: {
        type: String,
      },
    address: {
        type: String,
      },
    phone: {
        type: Number,
      },
    email: {
        type: String,
      },
  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model("devs", devsSchema);