const express = require('express');
const { ytmp4 } = require('ruhend-scraper');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/youtube-info', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            return res.status(400).json({ error: 'URL is required' });
        }
        const videoInfo = await ytmp4(url);
        res.json(videoInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 