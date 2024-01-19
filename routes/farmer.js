const express = require('express')
const farmerController = require('../controllers/farmer')
const router = express.Router()
const protect = require('../middlewares/authMiddleware')

router.get('/get-farmer', protect ,farmerController.getfarmers)
router.get('/get-farmer/:id', protect, farmerController.getsinglefarmer)

module.exports = router