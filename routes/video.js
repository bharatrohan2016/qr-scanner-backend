const express = require('express')
const router = express.Router()
const videoController = require('../controllers/video')
const upload = require('../middlewares/upload')

router.post('/upload-video',  upload.single('video'), videoController.upload)

module.exports = router