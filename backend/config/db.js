const mongoose = require("mongoose");

const connectDB = async () => {

    try {

        await mongoose.connect("mongodb+srv://admin:admin123@cluster0.wiqrb5n.mongodb.net/mentorlink");

        console.log("MongoDB Connected ✅");

    } catch (error) {

        console.log(error);
        process.exit(1);

    }

};

module.exports = connectDB;