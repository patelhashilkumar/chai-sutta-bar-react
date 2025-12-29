const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST /api/feedback
router.post('/', async (req, res) => {
    try {
        const { fullName, contactNumber, email, message } = req.body;

        const newFeedback = new Feedback({
            fullName,
            contactNumber,
            email,
            message,
        });

        const savedFeedback = await newFeedback.save();

        res.status(201).json({
            message: 'Feedback submitted successfully',
            data: savedFeedback,
        });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
