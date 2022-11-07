const express = require('express')
// const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const CourseEnrollment = require("./models/CourseEnrollment");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.post("/enroll", async (req,res) => {
    try {
        const  {fullname, username, email, password, courses} = req.body;
        const data = {
            FullName: fullname, 
            Username: username, 
            Email: email, 
            Password: password, 
            CourseName: courses}
        const item = await CourseEnrollment.create(data);
        console.log(item)
        if(item){
            res.status(200).json(item);
        }else{
            throw "Something went wrong";
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})

// app.use('/api/goals', require('./routes/goalRoutes'))


// app.use(errorHandler);                        
   
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));      