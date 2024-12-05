async function saveNotesToFile() {
    try {
        const response = await fetch('http://localhost:3000/saveNotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allNotes), // Send allNotes object
        });

        if (!response.ok) {
            throw new Error('Failed to save notes to file');
        }
        console.log('Notes successfully saved to file.');
    } catch (error) {
        console.error('Error:', error);
    }
}
