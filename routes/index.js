const express = require('express')
const router = express.Router()

router.use('/video', require('./video'))
router.use('/farmer', require('./farmer'))


module.exports = router;