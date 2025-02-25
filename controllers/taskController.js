const Task = require('../models/taskModel');
const Project = require('../models/projectModel');

exports.createTask = async (req, res) => {
    try {
        const { title, description, due_date, project_id } = req.body;
        if (!title || !description || !project_id) {
            return res.status(400).json({ success: false, message: 'Title, description, and project_id are required' });
        }

        const project = await Project.findOne({ _id: project_id, user_id: req.user.userId });

        if (!project) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }

        const task = new Task({
            title,
            description,
            due_date,
            project_id,
        });

        await task.save();
        res.status(201).json({ success: true, message: 'Task created successfully', task });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ project_id: req.params.project_id }).populate('project_id');
        res.status(200).json({ success: true, tasks });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { title, description, due_date } = req.body;
        const updatedTask = await Task.findOneAndUpdate(
            { _id: req.params.id },
            { title, description, due_date },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }

        res.status(200).json({ success: true, message: 'Task updated successfully', updatedTask });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findOneAndDelete({ _id: req.params.id });

        if (!deletedTask) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }

        res.status(200).json({ success: true, message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error });
    }
};
