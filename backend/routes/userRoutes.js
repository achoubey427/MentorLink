const express = require("express");
const router = express.Router();

const User = require("../models/User");


// ================= REGISTER =================
router.post("/register", async (req, res) => {

  try {

    console.log("REGISTER HIT 🔥", req.body);

    const { name, email, password, role } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      role
    });

    await newUser.save();

    console.log("USER SAVED ✅");

    res.json({
      message: "User registered successfully",
      user: newUser
    });

  } catch (error) {

    console.log("REGISTER ERROR:", error);

    res.status(500).json({
      message: "Server Error"
    });

  }

});


// ================= LOGIN =================
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    console.log("LOGIN HIT 🔥", email, password);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Wrong password"
      });
    }

    res.json({
      message: "Login successful",
      user
    });

  } catch (error) {

    console.log("LOGIN ERROR:", error);

    res.status(500).json({
      message: "Server Error"
    });

  }

});


// ================= GET USERS =================
router.get("/users", async (req, res) => {

  try {

    const users = await User.find();

    res.json(users);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

});


// ================= GET MENTORS =================
router.get("/mentors", async (req, res) => {

  try {

    const mentors = await User.find({ role: "mentor" });

    res.json(mentors);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

});


// ================= GET STUDENTS =================
router.get("/students", async (req, res) => {

  try {

    const students = await User.find({ role: "student" });

    res.json(students);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

});

module.exports = router;