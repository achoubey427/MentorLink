console.log("THIS SERVER FILE IS RUNNING");
const express = require("express");
const cors = require("cors");

// DATABASE
const connectDB = require("./config/db");
connectDB();

// ROUTES
const userRoutes = require("./routes/userRoutes");
const testRoutes = require("./routes/testRoutes");
const requestRoutes = require("./routes/requestRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Routes
app.use("/api", testRoutes);
app.use("/api", userRoutes);
app.use("/api", requestRoutes);

// Root test
app.get("/", (req,res)=>{
    res.send("MentorLink backend running 🚀");
});

// Start server
app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});

