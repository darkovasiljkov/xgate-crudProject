const express = require('express');
const projectController = require('../controllers/projectController');
const { identifier } = require('../middlewares/identification');
const router = express.Router();

router.post('/create', identifier, projectController.createProject);
router.get('/all', identifier, projectController.getProjects);
router.put('/:id', identifier, projectController.updateProject);
router.delete('/:id', identifier, projectController.deleteProject);

module.exports = router;
