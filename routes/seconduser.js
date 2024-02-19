// routes/user.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/seconduser');

router.post('/create-user', userController.signIn);

module.exports = router;
