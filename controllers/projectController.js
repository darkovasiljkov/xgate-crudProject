const Project = require('../models/projectModel');

exports.createProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ success: false, message: 'Name and description are required' });
        }

        const project = new Project({
            name,
            description,
            user_id: req.user.userId, // I'm getting user ID from the authenticated request with this
        });

        await project.save();
        res.status(201).json({ success: true, message: 'Project created successfully', project });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ user_id: req.user.userId });
        res.status(200).json({ success: true, projects });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error });
    }
};

exports.updateProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        const updatedProject = await Project.findOneAndUpdate(
            { _id: req.params.id, user_id: req.user.userId },
            { name, description },
            { new: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }

        res.status(200).json({ success: true, message: 'Project updated successfully', updatedProject });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findOneAndDelete({ _id: req.params.id, user_id: req.user.userId });

        if (!deletedProject) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }

        res.status(200).json({ success: true, message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error });
    }
};
