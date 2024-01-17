// routes/user.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/generateOTP', userController.generateOTP);
router.post('/verifyOTP', userController.verifyOTP);
router.post('/sign-in', userController.signIn);

module.exports = router;
