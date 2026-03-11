const express = require("express");

const router = express.Router();

const User = require("../models/User");

// REGISTER USER
router.post("/register", async (req, res) => {

    try {

        const newUser = new User(req.body);

        await newUser.save();

        res.json({ message: "User registered successfully 🚀" });

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "Server Error" });

    }

});

// GET ALL USERS
router.get("/users", async (req, res) => {

    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "Server Error" });

    }

});

// GET ALL MENTORS
router.get("/mentors", async (req, res) => {

    try {
        const mentors = await User.find({ role: "mentor" });
        res.json(mentors);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }

});


// GET ALL STUDENTS
router.get("/students", async (req, res) => {

    try {
        const students = await User.find({ role: "student" });
        res.json(students);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }

});

// GET matching mentors by skill
router.get("/match", async (req, res) => {

    try {

        const skill = req.query.skill;

        const mentors = await User.find({
            role: "mentor",
            skills: skill
        });

        res.json(mentors);

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "Server Error" });

    }

});


// SMART MATCH (AI-style matching)
router.get("/smartmatch", async (req, res) => {
  try {

    const email = req.query.email;

    if (!email) {
      return res.status(400).json({ message: "Email missing" });
    }

    // find student
    const student = await User.findOne({ email });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // find mentors
    const mentors = await User.find({ role: "mentor" });

    const studentSkills = student.skills || [];

    const matches = mentors.filter((mentor) => {
      const mentorSkills = mentor.skills || [];

      return mentorSkills.some(skill =>
        studentSkills.includes(skill)
      );
    });

    res.json(matches);

  } catch (error) {
    console.log("SMARTMATCH ERROR:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;

