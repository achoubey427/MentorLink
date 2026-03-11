const express = require("express");
const router = express.Router();

const Request = require("../models/Request");

// SEND REQUEST
router.post("/send-request", async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    await newRequest.save();

    res.json({ message: "Request sent successfully 🚀" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});


// GET MENTOR REQUESTS
router.get("/mentor-requests", async (req, res) => {

  try {

    const email = req.query.email;

    const requests = await Request.find({
      mentorEmail: email
    });

    res.json(requests);

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "Server Error" });

  }

});

module.exports = router;