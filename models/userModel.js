const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: [true, 'Email must be unique!'],
        trim: true, // no spaces in email
        minLength: [5, "Email must have 5 characters!"],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password must be provided!"],
        trim: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
},{timestamps:true}); // when the user was created?

module.exports = mongoose.model('User', userSchema);