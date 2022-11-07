const mongoose = require("mongoose");

const CourseEnrollmentSchema = new mongoose.Schema({
    FullName:{
        type: String,
        required: true
    },
    Username:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true,
    },
    Password:{
        type: String,
        required: true,
    },
    CourseName:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("CourseEnrollment", CourseEnrollmentSchema);