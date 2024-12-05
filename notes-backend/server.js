const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const filePath = './notes.json';

// Endpoint to save notes
app.post('/saveNotes', (req, res) => {
    const notes = req.body;

    fs.writeFile(filePath, JSON.stringify(notes, null, 2), (err) => {
        if (err) {
            console.error('Error saving notes:', err);
            return res.status(500).send('Failed to save notes');
        }
        res.send('Notes saved successfully');
    });
});

// Endpoint to retrieve notes (optional for initial load)
app.get('/getNotes', (req, res) => {
    if (fs.existsSync(filePath)) {
        const notes = fs.readFileSync(filePath);
        res.json(JSON.parse(notes));
    } else {
        res.json({
            notesTitles: [],
            notes: [],
            trashTitles: [],
            trash: []
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
