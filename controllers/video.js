const Video = require('../model/video');
const mongoose = require('mongoose');
const fs = require('fs/promises');

module.exports.upload = async (req, res) => {
    try {
        const videos = await Video.find();

        if (videos.length === 0) {
            const newVideo = new Video({
                video: req.file.path,
            });

            await newVideo.save();
            const updatedVideos = await Video.find();
            res.status(200).json(updatedVideos);
        } else {
            const existingVideo = videos[0];
            const oldVideoPath = existingVideo.video;

            existingVideo.video = req.file.path;

            await existingVideo.save();
            await fs.unlink(oldVideoPath);

            const updatedVideos = await Video.find();
            res.status(200).json(updatedVideos);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
