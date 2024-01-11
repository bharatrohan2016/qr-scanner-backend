const Farmer = require('../model/farmer')

module.exports.getfarmers = async (req, res) => {
    try {
        const farmers = await Farmer.find()
        res.status(200).json(farmers)
    } catch (error) {
        res.status(500).json('Internal Server Error', error)
    }
}

module.exports.getsinglefarmer = async(req, res) => {
    try {
        const farmer = await Farmer.findOne({_id: req.params.id})
        res.status(200).json(farmer)
    } catch (error) {
        res.status(500).json('Internal Server Error', error)
    }
}