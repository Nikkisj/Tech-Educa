const mongoose = require('mongoose')


const connectDB=()=>{const dbUrl = "mongodb://localhost:27017";
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",()=>{
    console.log("database connection");
})}

module.exports = connectDB;