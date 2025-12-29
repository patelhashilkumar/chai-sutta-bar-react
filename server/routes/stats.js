const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        baseKulhads: 200000000,
        dailyIncrease: 400000,
        startDate: "2025-09-12T00:00:00"
    });
});

module.exports = router;
