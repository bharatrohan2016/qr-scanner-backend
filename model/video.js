const mongoose = require('mongoose')
const videoSchema = new mongoose.Schema({
    video: {
        type: String
    }
}, {
    timestamps: true
})

const Video = mongoose.model('Video', videoSchema)
module.exports = Video