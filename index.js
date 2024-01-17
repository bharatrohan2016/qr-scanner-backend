const express = require('express')
const cors = require('cors')
const router = require('./routes')
const db = require('./config/database')
const app = express()
const PORT = 3200
require('dotenv').config()

app.use('/uploads', express.static('uploads'))
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.json({Message: 'Hi! Server Listening at this Port No.'})
})

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`App Listening on Port No. ${PORT}`);
})