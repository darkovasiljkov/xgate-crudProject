const express = require('express');
const taskController = require('../controllers/taskController');
const { identifier } = require('../middlewares/identification');
const router = express.Router();

router.post('/create', identifier, taskController.createTask);
router.get('/project/:project_id', identifier, taskController.getTasks);
router.put('/:id', identifier, taskController.updateTask);
router.delete('/:id', identifier, taskController.deleteTask);

module.exports = router;
