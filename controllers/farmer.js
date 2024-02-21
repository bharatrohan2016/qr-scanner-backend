const Farmer = require('../model/qrfarmer')
const { farmerMap } = require('../utils/map');
const multer = require('multer');
const xlsx = require('xlsx');

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

module.exports.getFarmersByBatchNumber = async (req, res) => {
    try {
        console.log(req.params.batchNumber);
        const { batchNumber } = req.params; // Access the batchNumber from route params
        newbatchNumber = batchNumber.toUpperCase();
        // You may still want to validate the batchNumber as needed
        const validBatchNumbers = ["BR 1192", "BR 0606", "BR 1706", "BR 0593"];
        if (!validBatchNumbers.includes(newbatchNumber)) {
            return res.status(400).json({ message: "Invalid batch number" });
        }

        const farmers = await Farmer.find({ batchnumber: newbatchNumber });
        res.status(200).json(farmers);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};


module.exports.uploadCsv = async (req, res) => {
    try {
        const file = xlsx.readFile(req.file.path);
        const sheetName = file.SheetNames[0];
        const sheet = file.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet);

        // Process and save each row to MongoDB
        for (const item of data) {
            // Map the Excel data to your Farmer model
            let mappedData = {};
            for (const [key, value] of Object.entries(farmerMap)) {
                if (item[key] !== undefined) { // Check if the Excel has this column
                    mappedData[value] = item[key];
                }
            }
            // Add any static values like batch number here
            mappedData.batchnumber = "BR 1706";

            const newFarmer = new Farmer(mappedData);
            await newFarmer.save();
        }

        res.status(201).send('Excel data uploaded and saved to database successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};