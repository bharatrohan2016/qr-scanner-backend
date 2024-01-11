const express = require('express')
const farmerController = require('../controllers/farmer')
const router = express.Router()

router.get('/get-farmer', farmerController.getfarmers)
router.get('/get-farmer/:id', farmerController.getsinglefarmer)

module.exports = router