const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({

  studentEmail: {
    type: String,
    required: true
  },

  mentorEmail: {
    type: String,
    required: true
  },

  skill: {
    type: String
  },

  status: {
    type: String,
    default: "pending"
  }

});

module.exports = mongoose.model("Request", requestSchema);