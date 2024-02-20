const express = require('express')
const farmerController = require('../controllers/farmer')
const router = express.Router()
const protect = require('../middlewares/authMiddleware')
const upload = require('../middlewares/upload')

router.get('/get-farmer' ,farmerController.getfarmers)
router.get('/get-farmer/:id', farmerController.getsinglefarmer)
router.post('/upload-farmer-data', upload.single('file'), farmerController.uploadCsv);
router.get('/farmers-by-batch/:batchNumber', farmerController.getFarmersByBatchNumber);

module.exports = router