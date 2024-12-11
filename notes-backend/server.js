const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
const PORT = 3000;

// Middleware
server.use(cors());
server.use(bodyParser.json());

const filePath = 'notes.json'; // Datei im Projektordner

// Endpunkt zum Speichern von Notizen
server.post('/saveNotes', (req, res) => {
    const notes = req.body;

    fs.writeFile(filePath, JSON.stringify(notes, null, 2), (err) => {
        if (err) {
            console.error('Error saving notes:', err);
            return res.status(500).send('Failed to save notes');
        }
        res.send('Notes saved successfully');
    });
});

// Endpunkt zum Abrufen von Notizen (optional für den ersten Ladevorgang)
server.get('/getNotes', (req, res) => {
    if (fs.existsSync(filePath)) {
        const notes = fs.readFileSync(filePath, 'utf-8');
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

// Startet den Server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
