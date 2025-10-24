const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection - use environment variable or default
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://anas:anas@cluster0.l2bvx.mongodb.net/dictionary_db?retryWrites=true&w=majority&appName=Cluster0';
let db;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from presentations directories
app.use('/presentations', express.static(path.join(__dirname, 'presentations')));

// Serve static files from root (images, presentation.html, etc)
app.use(express.static(__dirname));

// Serve index.html at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Connect to MongoDB
MongoClient.connect(MONGO_URI)
    .then(client => {
        console.log('✅ Connected to MongoDB');
        db = client.db('dictionary_db');
    })
    .catch(error => {
        console.warn('⚠️  MongoDB connection error:', error.message);
        console.warn('⚠️  Presentation notes will not be persisted');
    });

// API Routes for Presentation Notes (used by Oracle IaC presentation)

// Get all notes for a presentation
app.get('/api/notes/:presentationId', async (req, res) => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Database not connected' });
        }
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
        if (!db) {
            return res.status(503).json({ error: 'Database not connected' });
        }
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
        if (!db) {
            return res.status(503).json({ error: 'Database not connected' });
        }
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

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        dbConnected: !!db,
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log('🚀 Yassine DBAICHI - Portfolio Server');
    console.log('='.repeat(50));
    console.log(`📡 Server running on http://localhost:${PORT}`);
    console.log('');
    console.log('📂 Available presentations:');
    console.log(`   • Portfolio: http://localhost:${PORT}/`);
    console.log(`   • Book Marketplace: http://localhost:${PORT}/presentations/book-marketplace/presentation.html`);
    console.log(`   • Oracle IaC: http://localhost:${PORT}/presentations/oracle-iac/presentation.html`);
    console.log(`   • Oracle Presenter: http://localhost:${PORT}/presentations/oracle-iac/presenter.html`);
    console.log('='.repeat(50));
});
