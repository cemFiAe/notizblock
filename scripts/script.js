// notizen anzeigen lassen

let notesTitles = [];
let notes = [];

let trashTitles = [];
let trash = [];

let allNotes = {
    'notesTitles': [],
    'notes': [],
    'trashTitles': [],
    'trash': [],
}

function init(){
    getFromLocalStorage();
    getFromLocalStorageTrash();
    renderNotes();
    renderTrash();
}

function addNote(){
    let title = document.getElementById('titleInput');
    let note = document.getElementById('noteInput');

    if (title.value.trim() === '') {
        alert('Bitte geben Sie einen Titel ein.');
        return; // Beende die Funktion, wenn das Feld leer ist
    }

    if (note.value.trim() === '') {
        alert('Bitte geben Sie eine Notiz ein.');
        return; // Beende die Funktion, wenn das Feld leer ist
    }

    // Wenn beide Felder ausgefüllt sind, fahre fort
    
    allNotes.notesTitles.push(title.value.trim()); // trim() entfernt unnötige Leerzeichen
    allNotes.notes.push(note.value.trim());

    saveToLocalStorage();
    renderNotes();

    // Eingabefelder nach dem Hinzufügen leeren
    title.value = '';
    note.value = '';

}
function saveToLocalStorage(){
    let titleAsText = JSON.stringify(allNotes.notesTitles);

    let notesAsText =  JSON.stringify(allNotes.notes);

    if(titleAsText && notesAsText){
        localStorage.setItem('Title:', titleAsText);        
        localStorage.setItem('Note:', notesAsText);
    }
}
function getFromLocalStorage(){
    let titleAsText = localStorage.getItem('Title:');
    let notesAsText = localStorage.getItem('Note:');
    
    if(titleAsText && notesAsText){
        allNotes.notesTitles = JSON.parse(titleAsText);
        allNotes.notes = JSON.parse(notesAsText);
    }
}

function moveNote(indexNote, startKey, destinationKey){
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);
    
    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(notesTitle[0]);

    saveToLocalStorage();
    saveToLocalStorageTrash();
    renderNotes();
    renderTrash();
}

function saveToLocalStorageTrash(){
    let titleAsTextTrash = JSON.stringify(allNotes.trashTitles);

    let notesAsTextTrash =  JSON.stringify(allNotes.trash);

    if(titleAsTextTrash && notesAsTextTrash){
        localStorage.setItem('Title-Trash:', titleAsTextTrash);        
        localStorage.setItem('Note-Trash:', notesAsTextTrash);
    }
}
function getFromLocalStorageTrash(){
    let titleAsTextTrash = localStorage.getItem('Title-Trash:');
    let notesAsTextTrash = localStorage.getItem('Note-Trash:');
    
    if(titleAsTextTrash && notesAsTextTrash){
        allNotes.trashTitles = JSON.parse(titleAsTextTrash);
        allNotes.trash = JSON.parse(notesAsTextTrash);
    }
}
function deleteTrashNote(i){
    allNotes.trashTitles.splice(i, 1);
    allNotes.trash.splice(i, 1);

    renderTrash();
    saveToLocalStorageTrash();
}

function toggleTrash(){
    document.getElementById('trash_container').classList.toggle('d_none');
}

// function moveToTrash(i){
//     let trashTitle = allNotes.notesTitles.splice(i, 1);
//     let trashNote = allNotes.notes.splice(i, 1);

//     allNotes.trashTitles.push(trashTitle[0]);
//     allNotes.trash.push(trashNote[0]);   

//     saveToLocalStorage();
//     saveToLocalStorageTrash();
//     renderNotes();
//     renderTrash();

// }

// function restore(i){
//     let notesTitle = allNotes.traitlshTes.splice(i, 1);
//     let note = allNotes.trash.splice(i, 1);

//     allNotes.notesTitles.push(notesTitle[0]);
//     allNotes.notes.push(note[0]);

//     saveToLocalStorage();
//     saveToLocalStorageTrash();
//     renderNotes();
//     renderTrash();
// }
