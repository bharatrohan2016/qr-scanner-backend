const express = require('express')
const farmerController = require('../controllers/farmer')
const router = express.Router()
const protect = require('../middlewares/authMiddleware')

router.get('/get-farmer' ,farmerController.getfarmers)
router.get('/get-farmer/:id', farmerController.getsinglefarmer)

module.exports = router