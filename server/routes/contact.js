const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
    try {
        const { name, contactNumber, email, message } = req.body;

        const newContact = new Contact({
            name,
            contactNumber,
            email,
            message,
        });

        const savedContact = await newContact.save();

        res.status(201).json({
            message: 'Contact inquiry submitted successfully',
            data: savedContact,
        });
    } catch (error) {
        console.error('Error saving contact inquiry:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
