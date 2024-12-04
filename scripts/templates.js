
function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let i = 0; i < allNotes.notes.length; i++){
        contentRef.innerHTML += getNoteTemplates(i);
    }
}
function renderTrash(){
    let trashRef = document.getElementById('trash');
    trashRef.innerHTML = '';

    for(let i = 0; i < allNotes.trash.length; i++){
        trashRef.innerHTML += getTrashTemplates(i);
    }

}
function getNoteTemplates(i){
    return /*html*/`
        <div class="card">
            <div class="card-body">
                <h2>Title: ${allNotes.notesTitles[i]}</h2>
                <p> ${allNotes.notes[i]}</p>
                <button onclick="moveNote(${i}, 'notes', 'trash')" type="button" class="btn btn-danger">delete</button>
            </div>
        </div>
    `
}
function getTrashTemplates(i){
    return /*html*/ `
        <div class="card">
            <div class="card-body single-trash-container">
            <h2>Title: ${allNotes.trashTitles[i]}</h2>
            <p>${allNotes.trash[i]}</p>
            <button onclick="deleteTrashNote(${i})" type="button" class="btn btn-danger trash-button">permanently delete</button>
            <button onclick="moveNote(${i}, 'trash', 'notes')" type="button" class="btn btn-success trash-button">restore</button>
            </div>
        </div>
    `
}
