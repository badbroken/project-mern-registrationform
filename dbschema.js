const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: Number,
        unique: true
    },
    address:{
        type: String
    },
    hearAbout: {
        type: String
    },
    occupation: {
        type: String
    },
    userMessage: {
        type: String
    }
});
const User = mongoose.model('User',userSchema)
module.exports = User;