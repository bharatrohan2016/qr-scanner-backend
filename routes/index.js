const express = require('express')
const router = express.Router()

router.use('/video', require('./video'))
router.use('/farmer', require('./farmer'))
router.use('/user', require('./user'))
router.use('/second-user', require('./seconduser'))


module.exports = router;