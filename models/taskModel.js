const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description for the task is required!'],
        trim: true,
    },
    due_date: Date,
    project_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'}
},{timestamps:true});  // when the task was made?

module.exports = mongoose.model('Task', taskSchema);
