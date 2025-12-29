const express = require('express');
const router = express.Router();
const Franchise = require('../models/Franchise');

// POST /api/franchise
router.post('/', async (req, res) => {
    try {
        const { name, contactNumber, email, area, address, message, budget } = req.body;

        const newFranchise = new Franchise({
            name,
            contactNumber,
            email,
            area,
            address,
            message,
            budget,
        });

        const savedFranchise = await newFranchise.save();

        res.status(201).json({
            message: 'Franchise inquiry submitted successfully',
            data: savedFranchise,
        });
    } catch (error) {
        console.error('Error saving franchise inquiry:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
