import express from 'express';
import { getAllArticles } from './models/data.js';

const app = express();

const PORT = 3001;

app.get('/', (req, res) => {
    res.json(getAllArticles());
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});