const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const statsRoutes = require('./routes/stats');
const franchiseRoutes = require('./routes/franchise');
const feedbackRoutes = require('./routes/feedback');
const contactRoutes = require('./routes/contact');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.warn('WARNING: MONGO_URI is not defined in .env file. MongoDB connection will fail.');
}

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

app.use('/api/stats', statsRoutes);
app.use('/api/franchise', franchiseRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
    res.send('Chai Sutta Bar API is running');
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is in use, trying ${PORT + 1}`);
        server.listen(PORT + 1);
    } else {
        console.error(e);
    }
});
