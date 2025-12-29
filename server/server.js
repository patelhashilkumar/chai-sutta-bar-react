const express = require('express');
const cors = require('cors');
const statsRoutes = require('./routes/stats');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/stats', statsRoutes);

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
