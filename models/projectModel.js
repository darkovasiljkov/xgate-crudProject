const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Title is required!'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        trim: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{timestamps:true}); // when the project was made?

module.exports = mongoose.model('Project', projectSchema);
