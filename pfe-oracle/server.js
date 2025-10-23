const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = 3000;

// MongoDB connection
const MONGO_URI = 'mongodb+srv://anas:anas@cluster0.l2bvx.mongodb.net/dictionary_db?retryWrites=true&w=majority&appName=Cluster0';
let db;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files from current directory

// Connect to MongoDB
MongoClient.connect(MONGO_URI)
    .then(client => {
        console.log('Connected to MongoDB');
        db = client.db('dictionary_db');
    })
    .catch(error => console.error('MongoDB connection error:', error));

// Get all notes for a presentation
app.get('/api/notes/:presentationId', async (req, res) => {
    try {
        const notes = await db.collection('presentation_notes')
            .find({ presentationId: req.params.presentationId })
            .toArray();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Save or update a note for a specific slide
app.post('/api/notes/:presentationId/:slideIndex', async (req, res) => {
    try {
        const { presentationId, slideIndex } = req.params;
        const { notes } = req.body;

        const result = await db.collection('presentation_notes').updateOne(
            { presentationId, slideIndex: parseInt(slideIndex) },
            {
                $set: {
                    notes,
                    updatedAt: new Date()
                }
            },
            { upsert: true }
        );

        res.json({ success: true, result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a note
app.delete('/api/notes/:presentationId/:slideIndex', async (req, res) => {
    try {
        const { presentationId, slideIndex } = req.params;

        const result = await db.collection('presentation_notes').deleteOne({
            presentationId,
            slideIndex: parseInt(slideIndex)
        });

        res.json({ success: true, result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Open presentation.html in your browser');
});
