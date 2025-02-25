const express = require('express');
const authController = require('../controllers/authController');
const {identifier} = require("../middlewares/identification");
const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/signout', identifier, authController.signout);

module.exports = router;