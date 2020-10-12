const express = require("express")
const mongoose = require('mongoose');
const User = require("./dbschema");
const app = express()

// Default Express Setting starts here
app.use(express.static("build"))
app.use(express.urlencoded({extended: false}))
app.use(express.json({extended: false}))

app.listen(process.env.REACT_APP_EX_PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.REACT_APP_EX_PORT}`)
})

//Connection to Database from Backend Starts Here
//defining the url to database
const dburl = process.env.REACT_APP_DBURL

//Defining the async function to connect to database through mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log("MongoDB is connected")
    } catch (e) {
        console.log(e)
    }
}
connectDB()
//Connection to Database from Backend Ends Here

app.post("/api/", async (req , res) => {
    try {
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            hearAbout: req.body.hearAbout,
            occupation: req.body.occupation,
            userMessage: req.body.userMessage,
        })
        res.json({
            message: "User Registered"
        })
    } catch (e) {
        res.json({
            message: "Email already registered"
        })
    }
})

